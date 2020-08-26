import { ref, computed } from 'vue';
import { createNamespace, addUnit } from '../../utils';
import { unitToPx } from '../../utils/format/unit';
import { setScrollTop } from '../../utils/dom/scroll';
import {
  t,
  bem,
  compareDay,
  ROW_HEIGHT,
  getPrevDay,
  getNextDay,
  formatMonthTitle,
} from '../utils';
import { getMonthEndDay } from '../../datetime-picker/utils';
import Day from './Day';

const [createComponent] = createNamespace('calendar-month');

export default createComponent({
  props: {
    date: Date,
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: [Number, String],
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number,
  },

  emits: ['click'],

  setup(props, { emit }) {
    const visible = ref(false);
    const daysRef = ref(null);
    const monthRef = ref(null);

    const title = computed(() => formatMonthTitle(props.date));

    const rowHeight = computed(() => {
      if (props.rowHeight !== ROW_HEIGHT) {
        return addUnit(props.rowHeight);
      }
    });

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

    const monthStyle = computed(() => {
      if (!shouldRender.value) {
        const rowCount = Math.ceil((totalDay.value + offset.value) / 7);
        const padding = rowCount * unitToPx(props.rowHeight);
        return {
          paddingBottom: `${padding}px`,
        };
      }
    });

    let height;
    const getHeight = () => {
      if (!height) {
        ({ height } = monthRef.value.getBoundingClientRect());
      }
      return height;
    };

    const setVisible = (value) => {
      visible.value = value;
    };

    const getDate = () => props.data;

    const getTitle = () => title.value;

    const scrollIntoView = (body) => {
      const el = props.showSubtitle ? daysRef.value : monthRef.value;

      const scrollTop =
        el.getBoundingClientRect().top -
        body.getBoundingClientRect().top +
        body.scrollTop;

      setScrollTop(body, scrollTop);
    };

    const getMultipleDayType = (day) => {
      const isSelected = (date) =>
        props.currentDate.some((item) => compareDay(item, date) === 0);

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

    const getRangeDayType = (day) => {
      const [startDay, endDay] = props.currentDate;

      if (!startDay) {
        return '';
      }

      const compareToStart = compareDay(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      const compareToEnd = compareDay(day, endDay);

      if (compareToStart === 0 && compareToEnd === 0 && props.allowSameDay) {
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
    };

    const getDayType = (day) => {
      const { type, minDate, maxDate, currentDate } = props;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (Array.isArray(currentDate)) {
        if (type === 'multiple') {
          return getMultipleDayType(day);
        }
        if (type === 'range') {
          return getRangeDayType(day);
        }
      } else if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }
    };

    const getBottomInfo = (dayType) => {
      if (props.type === 'range') {
        if (dayType === 'start' || dayType === 'end') {
          return t(dayType);
        }
        if (dayType === 'start-end') {
          return t('startEnd');
        }
      }
    };

    const renderTitle = () => {
      if (props.showMonthTitle) {
        return <div class={bem('month-title')}>{title.value}</div>;
      }
    };

    const renderMark = () => {
      if (props.showMark) {
        return <div class={bem('month-mark')}>{props.date.getMonth() + 1}</div>;
      }
    };

    const days = computed(() => {
      const days = [];
      const year = props.date.getFullYear();
      const month = props.date.getMonth();

      for (let day = 1; day <= totalDay.value; day++) {
        const date = new Date(year, month, day);
        const type = getDayType(date);

        let config = {
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

    const renderDay = (item, index) => (
      <Day
        item={item}
        index={index}
        color={props.color}
        offset={offset.value}
        rowHeight={rowHeight.value}
        onClick={(item) => {
          emit('click', item);
        }}
      />
    );

    const renderDays = () => {
      if (shouldRender.value) {
        return (
          <div ref={daysRef} role="grid" class={bem('days')}>
            {renderMark()}
            {days.value.map(renderDay)}
          </div>
        );
      }

      return <div ref={daysRef} />;
    };

    return (vm) => {
      vm.getDate = getDate;
      vm.getTitle = getTitle;
      vm.getHeight = getHeight;
      vm.setVisible = setVisible;
      vm.scrollIntoView = scrollIntoView;

      return (
        <div class={bem('month')} ref={monthRef} style={monthStyle.value}>
          {renderTitle()}
          {renderDays()}
        </div>
      );
    };
  },
});
