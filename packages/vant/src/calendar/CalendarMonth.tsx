import {
  ref,
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  addUnit,
  numericProp,
  setScrollTop,
  createNamespace,
  makeRequiredProp,
} from '../utils';
import { getMonthEndDay } from '../date-picker/utils';
import {
  t,
  bem,
  compareDay,
  getPrevDay,
  getNextDay,
  formatMonthTitle,
} from './utils';

// Composables
import { useRect, useToggle } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useHeight } from '../composables/use-height';

// Components
import CalendarDay from './CalendarDay';

// Types
import type { CalendarType, CalendarDayItem, CalendarDayType } from './types';

const [name] = createNamespace('calendar-month');

const calendarMonthProps = {
  date: makeRequiredProp(Date),
  type: String as PropType<CalendarType>,
  color: String,
  minDate: makeRequiredProp(Date),
  maxDate: makeRequiredProp(Date),
  showMark: Boolean,
  rowHeight: numericProp,
  formatter: Function as PropType<(item: CalendarDayItem) => CalendarDayItem>,
  lazyRender: Boolean,
  currentDate: [Date, Array] as PropType<Date | Date[] | null>,
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number,
};

export type CalendarMonthProps = ExtractPropTypes<typeof calendarMonthProps>;

export default defineComponent({
  name,

  props: calendarMonthProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
    const [visible, setVisible] = useToggle();
    const daysRef = ref<HTMLElement>();
    const monthRef = ref<HTMLElement>();
    const height = useHeight(monthRef);

    const title = computed(() => formatMonthTitle(props.date));
    const rowHeight = computed(() => addUnit(props.rowHeight));
    const offset = computed(() => {
      const realDay = props.date.getDay();

      if (props.firstDayOfWeek) {
        return (realDay + 7 - props.firstDayOfWeek) % 7;
      }
      return realDay;
    });

    const totalDay = computed(() =>
      getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1)
    );

    const shouldRender = computed(() => visible.value || !props.lazyRender);

    const getTitle = () => title.value;

    const getMultipleDayType = (day: Date) => {
      const isSelected = (date: Date) =>
        (props.currentDate as Date[]).some(
          (item) => compareDay(item, date) === 0
        );

      if (isSelected(day)) {
        const prevDay = getPrevDay(day);
        const nextDay = getNextDay(day);
        const prevSelected = isSelected(prevDay);
        const nextSelected = isSelected(nextDay);

        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }
        if (prevSelected) {
          return 'end';
        }
        if (nextSelected) {
          return 'start';
        }
        return 'multiple-selected';
      }

      return '';
    };

    const getRangeDayType = (day: Date) => {
      const [startDay, endDay] = props.currentDate as Date[];

      if (!startDay) {
        return '';
      }

      const compareToStart = compareDay(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      const compareToEnd = compareDay(day, endDay);

      if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
        return 'start-end';
      }
      if (compareToStart === 0) {
        return 'start';
      }
      if (compareToEnd === 0) {
        return 'end';
      }
      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }

      return '';
    };

    const getDayType = (day: Date): CalendarDayType => {
      const { type, minDate, maxDate, currentDate } = props;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (currentDate === null) {
        return '';
      }

      if (Array.isArray(currentDate)) {
        if (type === 'multiple') {
          return getMultipleDayType(day);
        }
        if (type === 'range') {
          return getRangeDayType(day);
        }
      } else if (type === 'single') {
        return compareDay(day, currentDate as Date) === 0 ? 'selected' : '';
      }

      return '';
    };

    const getBottomInfo = (dayType: CalendarDayType) => {
      if (props.type === 'range') {
        if (dayType === 'start' || dayType === 'end') {
          return t(dayType);
        }
        if (dayType === 'start-end') {
          return `${t('start')}/${t('end')}`;
        }
      }
    };

    const renderTitle = () => {
      if (props.showMonthTitle) {
        return (
          <div class={bem('month-title')}>
            {slots['month-title']
              ? slots['month-title']({
                  date: props.date,
                  text: title.value,
                })
              : title.value}
          </div>
        );
      }
    };

    const renderMark = () => {
      if (props.showMark && shouldRender.value) {
        return <div class={bem('month-mark')}>{props.date.getMonth() + 1}</div>;
      }
    };

    const placeholders = computed<CalendarDayItem[]>(() => {
      const count = Math.ceil((totalDay.value + offset.value) / 7);
      return Array(count).fill({ type: 'placeholder' });
    });

    const days = computed(() => {
      const days: CalendarDayItem[] = [];
      const year = props.date.getFullYear();
      const month = props.date.getMonth();

      for (let day = 1; day <= totalDay.value; day++) {
        const date = new Date(year, month, day);
        const type = getDayType(date);

        let config: CalendarDayItem = {
          date,
          type,
          text: day,
          bottomInfo: getBottomInfo(type),
        };

        if (props.formatter) {
          config = props.formatter(config);
        }

        days.push(config);
      }

      return days;
    });

    const disabledDays = computed(() =>
      days.value.filter((day) => day.type === 'disabled')
    );

    const scrollToDate = (body: Element, targetDate: Date) => {
      if (daysRef.value) {
        const daysRect = useRect(daysRef.value);
        const totalRows = placeholders.value.length;
        const currentRow = Math.ceil((targetDate.getDate() + offset.value) / 7);
        const rowOffset = ((currentRow - 1) * daysRect.height) / totalRows;

        setScrollTop(
          body,
          daysRect.top + rowOffset + body.scrollTop - useRect(body).top
        );
      }
    };

    const renderDay = (item: CalendarDayItem, index: number) => (
      <CalendarDay
        v-slots={pick(slots, ['top-info', 'bottom-info'])}
        item={item}
        index={index}
        color={props.color}
        offset={offset.value}
        rowHeight={rowHeight.value}
        onClick={(item) => emit('click', item)}
      />
    );

    const renderDays = () => (
      <div ref={daysRef} role="grid" class={bem('days')}>
        {renderMark()}
        {(shouldRender.value ? days : placeholders).value.map(renderDay)}
      </div>
    );

    useExpose({
      getTitle,
      getHeight: () => height.value,
      setVisible,
      scrollToDate,
      disabledDays,
    });

    return () => (
      <div class={bem('month')} ref={monthRef}>
        {renderTitle()}
        {renderDays()}
      </div>
    );
  },
});
