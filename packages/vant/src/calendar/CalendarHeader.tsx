import { computed, defineComponent } from 'vue';

// Utils
import { createNamespace, HAPTICS_FEEDBACK, makeStringProp } from '../utils';
import {
  t,
  bem,
  getPrevMonth,
  getPrevYear,
  getNextMonth,
  getNextYear,
} from './utils';

// Components
import { Icon } from '../icon';

// Types
import type { CalendarSwitchMode } from './types';

const [name] = createNamespace('calendar-header');

export default defineComponent({
  name,

  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: makeStringProp<CalendarSwitchMode>('none'),
  },

  emits: ['clickSubtitle', 'panelChange'],

  setup(props, { slots, emit }) {
    const prevMonthDisabled = computed(() => {
      const prevMonth = getPrevMonth(props.date!);
      return props.minDate && prevMonth < props.minDate;
    });

    const prevYearDisabled = computed(() => {
      const prevYear = getPrevYear(props.date!);
      return props.minDate && prevYear < props.minDate;
    });

    const nextMonthDisabled = computed(() => {
      const nextMonth = getNextMonth(props.date!);
      return props.maxDate && nextMonth > props.maxDate;
    });

    const nextYearDisabled = computed(() => {
      const nextYear = getNextYear(props.date!);
      return props.maxDate && nextYear > props.maxDate;
    });

    const renderTitle = () => {
      if (props.showTitle) {
        const text = props.title || t('title');
        const title = slots.title ? slots.title() : text;
        return <div class={bem('header-title')}>{title}</div>;
      }
    };

    const onClickSubtitle = (event: MouseEvent) => emit('clickSubtitle', event);

    const onPanelChange = (date: Date) => emit('panelChange', date);

    const renderAction = (isNext?: boolean) => {
      const showYearAction = props.switchMode === 'year-month';
      const monthSlot = slots[isNext ? 'next-month' : 'prev-month'];
      const yearSlot = slots[isNext ? 'next-year' : 'prev-year'];
      const monthDisabled = isNext
        ? nextMonthDisabled.value
        : prevMonthDisabled.value;
      const yearDisabled = isNext
        ? nextYearDisabled.value
        : prevYearDisabled.value;
      const monthIconName = isNext ? 'arrow' : 'arrow-left';
      const yearIconName = isNext ? 'arrow-double-right' : 'arrow-double-left';

      const onMonthChange = () =>
        onPanelChange((isNext ? getNextMonth : getPrevMonth)(props.date!));
      const onYearChange = () =>
        onPanelChange((isNext ? getNextYear : getPrevYear)(props.date!));

      const MonthAction = (
        <view
          class={bem('header-action', { disabled: monthDisabled })}
          onClick={monthDisabled ? undefined : onMonthChange}
        >
          {monthSlot ? (
            monthSlot({ disabled: monthDisabled })
          ) : (
            <Icon
              class={{ [HAPTICS_FEEDBACK]: !monthDisabled }}
              name={monthIconName}
            />
          )}
        </view>
      );
      const YearAction = showYearAction && (
        <view
          class={bem('header-action', { disabled: yearDisabled })}
          onClick={yearDisabled ? undefined : onYearChange}
        >
          {yearSlot ? (
            yearSlot({ disabled: yearDisabled })
          ) : (
            <Icon
              class={{ [HAPTICS_FEEDBACK]: !yearDisabled }}
              name={yearIconName}
            />
          )}
        </view>
      );

      return isNext ? [MonthAction, YearAction] : [YearAction, MonthAction];
    };

    const renderSubtitle = () => {
      if (props.showSubtitle) {
        const title = slots.subtitle
          ? slots.subtitle({
              date: props.date,
              text: props.subtitle,
            })
          : props.subtitle;
        const canSwitch = props.switchMode !== 'none';

        return (
          <div
            class={bem('header-subtitle', { 'with-swicth': canSwitch })}
            onClick={onClickSubtitle}
          >
            {canSwitch
              ? [
                  renderAction(),
                  <div class={bem('header-subtitle-text')}>{title}</div>,
                  renderAction(true),
                ]
              : title}
          </div>
        );
      }
    };

    const renderWeekDays = () => {
      const { firstDayOfWeek } = props;
      const weekdays = t('weekdays');
      const renderWeekDays = [
        ...weekdays.slice(firstDayOfWeek, 7),
        ...weekdays.slice(0, firstDayOfWeek),
      ];

      return (
        <div class={bem('weekdays')}>
          {renderWeekDays.map((text) => (
            <span class={bem('weekday')}>{text}</span>
          ))}
        </div>
      );
    };

    return () => (
      <div class={bem('header')}>
        {renderTitle()}
        {renderSubtitle()}
        {renderWeekDays()}
      </div>
    );
  },
});
