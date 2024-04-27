import { computed, defineComponent } from 'vue';

// Utils
import { createNamespace, makeStringProp } from '../utils';
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

    const renderPrevAction = () => {
      const showPrevYearAction = props.switchMode === 'year-month';
      const prevMonthSlot = slots['prev-month'];
      const prevYearSlot = slots['prev-year'];

      return [
        showPrevYearAction && (
          <view
            class={bem('header-action', { disabled: prevYearDisabled.value })}
            onClick={
              prevYearDisabled.value
                ? undefined
                : () => onPanelChange(getPrevYear(props.date!))
            }
          >
            {prevYearSlot ? (
              prevYearSlot({ disabled: prevYearDisabled.value })
            ) : (
              <Icon name="arrow-double-left" />
            )}
          </view>
        ),
        <view
          class={bem('header-action', { disabled: prevMonthDisabled.value })}
          onClick={
            prevMonthDisabled.value
              ? undefined
              : () => onPanelChange(getPrevMonth(props.date!))
          }
        >
          {prevMonthSlot ? (
            prevMonthSlot({ disabled: prevMonthDisabled.value })
          ) : (
            <Icon name="arrow-left" />
          )}
        </view>,
      ];
    };

    const renderNextAction = () => {
      const showNextYearAction = props.switchMode === 'year-month';
      const nextMonthSlot = slots['next-month'];
      const nextYearSlot = slots['next-year'];

      return [
        <view
          class={bem('header-action', { disabled: nextMonthDisabled.value })}
          onClick={
            nextMonthDisabled.value
              ? undefined
              : () => onPanelChange(getNextMonth(props.date!))
          }
        >
          {nextMonthSlot ? (
            nextMonthSlot({ disabled: nextMonthDisabled.value })
          ) : (
            <Icon name="arrow" />
          )}
        </view>,
        showNextYearAction && (
          <view
            class={bem('header-action', { disabled: nextYearDisabled.value })}
            onClick={
              nextYearDisabled.value
                ? undefined
                : () => onPanelChange(getNextYear(props.date!))
            }
          >
            {nextYearSlot ? (
              nextYearSlot({ disabled: nextYearDisabled.value })
            ) : (
              <Icon name="arrow-double-right" />
            )}
          </view>
        ),
      ];
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
                  renderPrevAction(),
                  <div class={bem('header-subtitle-text')}>{title}</div>,
                  renderNextAction(),
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
