import { ref, watch, reactive, computed, onMounted, onActivated } from 'vue';

// Utils
import { pick, getScrollTop } from '../utils';
import { isDate } from '../utils/validate/date';
import {
  t,
  bem,
  copyDate,
  copyDates,
  getNextDay,
  compareDay,
  calcDateNum,
  compareMonth,
  createComponent,
  getDayByOffset,
} from './utils';

// Composition
import { raf, useRect } from '@vant/use';
import { useRefs } from '../composition/use-refs';
import { useExpose } from '../composition/use-expose';

// Components
import Popup from '../popup';
import Button from '../button';
import Toast from '../toast';
import Month from './components/Month';
import Header from './components/Header';

export default createComponent({
  props: {
    show: Boolean,
    title: String,
    color: String,
    readonly: Boolean,
    teleport: [String, Object],
    formatter: Function,
    rowHeight: [Number, String],
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single',
    },
    round: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'bottom',
    },
    poppable: {
      type: Boolean,
      default: true,
    },
    maxRange: {
      type: [Number, String],
      default: null,
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
    showMark: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    showSubtitle: {
      type: Boolean,
      default: true,
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    minDate: {
      type: Date,
      validator: isDate,
      default: () => new Date(),
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      },
    },
    firstDayOfWeek: {
      type: [Number, String],
      default: 0,
      validator: (val) => val >= 0 && val <= 6,
    },
  },

  emits: ['select', 'confirm', 'unselect', 'month-show', 'update:show'],

  setup(props, { emit, slots }) {
    const getInitialDate = () => {
      const { type, minDate, maxDate, defaultDate } = props;

      if (defaultDate === null) {
        return defaultDate;
      }

      let defaultVal = new Date();

      if (compareDay(defaultVal, minDate) === -1) {
        defaultVal = minDate;
      } else if (compareDay(defaultVal, maxDate) === 1) {
        defaultVal = maxDate;
      }

      if (type === 'range') {
        const [startDay, endDay] = defaultDate || [];
        return [startDay || defaultVal, endDay || getNextDay(defaultVal)];
      }

      if (type === 'multiple') {
        return defaultDate || [defaultVal];
      }

      return defaultDate || defaultVal;
    };

    let bodyHeight;

    const bodyRef = ref();

    const state = reactive({
      subtitle: '',
      currentDate: getInitialDate(),
      realRowHeight: 0,
    });

    const [monthRefs, setMonthRefs] = useRefs();

    const dayOffset = computed(() =>
      props.firstDayOfWeek ? props.firstDayOfWeek % 7 : 0
    );

    const months = computed(() => {
      const months = [];
      const cursor = new Date(props.minDate);

      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, props.maxDate) !== 1);

      return months;
    });

    const buttonDisabled = computed(() => {
      const { currentDate } = state;

      if (currentDate) {
        if (props.type === 'range') {
          return !currentDate[0] || !currentDate[1];
        }
        if (props.type === 'multiple') {
          return !currentDate.length;
        }
      }

      return !currentDate;
    });

    // scroll to current month
    const scrollIntoView = () => {
      raf(() => {
        const { currentDate } = state;

        if (!currentDate) {
          return;
        }

        const targetDate =
          props.type === 'single' ? currentDate : currentDate[0];
        const displayed = props.show || !props.poppable;

        /* istanbul ignore if */
        if (!targetDate || !displayed) {
          return;
        }

        months.value.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            monthRefs.value[index].scrollIntoView(bodyRef.value);
            return true;
          }

          return false;
        });
      });
    };

    // calculate the position of the elements
    // and find the elements that needs to be rendered
    const onScroll = () => {
      const top = getScrollTop(bodyRef.value);
      const bottom = top + bodyHeight;

      const heights = months.value.map((item, index) =>
        monthRefs.value[index].getHeight()
      );
      const heightSum = heights.reduce((a, b) => a + b, 0);

      // iOS scroll bounce may exceed the range
      if (bottom > heightSum && top > 0) {
        return;
      }

      let height = 0;
      let currentMonth;
      const visibleRange = [-1, -1];

      for (let i = 0; i < months.value.length; i++) {
        const month = monthRefs.value[i];
        const visible = height <= bottom && height + heights[i] >= top;

        if (visible) {
          visibleRange[1] = i;

          if (!currentMonth) {
            currentMonth = month;
            visibleRange[0] = i;
          }

          if (!month.visible) {
            emit('month-show', {
              date: month.date,
              title: month.title,
            });
          }
        }

        height += heights[i];
      }

      months.value.forEach((month, index) => {
        const visible =
          index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
        monthRefs.value[index].setVisible(visible);
      });

      /* istanbul ignore else */
      if (currentMonth) {
        state.subtitle = currentMonth.getTitle();
      }
    };

    const init = () => {
      if (props.poppable && !props.show) {
        return;
      }

      raf(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        bodyHeight = Math.floor(useRect(bodyRef).height);
        onScroll();
        scrollIntoView();
      });
    };

    const reset = () => {
      state.currentDate = getInitialDate();
      scrollIntoView();
    };

    const checkRange = (date) => {
      const { maxRange, rangePrompt } = props;

      if (maxRange && calcDateNum(date) > maxRange) {
        Toast(rangePrompt || t('rangePrompt', maxRange));
        return false;
      }

      return true;
    };

    const onConfirm = () => {
      emit('confirm', copyDates(state.currentDate));
    };

    const select = (date, complete) => {
      const setCurrentDate = (date) => {
        state.currentDate = date;
        emit('select', copyDates(state.currentDate));
      };

      if (complete && props.type === 'range') {
        const valid = checkRange(date);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (props.showConfirm) {
            setCurrentDate([
              date[0],
              getDayByOffset(date[0], props.maxRange - 1),
            ]);
          } else {
            setCurrentDate(date);
          }
          return;
        }
      }

      setCurrentDate(date);

      if (complete && !props.showConfirm) {
        onConfirm();
      }
    };

    const onClickDay = (item) => {
      if (props.readonly) {
        return;
      }

      const { date } = item;
      const { type } = props;
      const { currentDate } = state;

      if (type === 'range') {
        if (!currentDate) {
          select([date, null]);
          return;
        }

        const [startDay, endDay] = currentDate;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            select([startDay, date], true);
          } else if (compareToStart === -1) {
            select([date, null]);
          } else if (props.allowSameDay) {
            select([date, date], true);
          }
        } else {
          select([date, null]);
        }
      } else if (type === 'multiple') {
        if (!currentDate) {
          select([date]);
          return;
        }

        let selectedIndex;
        const selected = state.currentDate.some((dateItem, index) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        });

        if (selected) {
          const [unselectedDate] = currentDate.splice(selectedIndex, 1);
          emit('unselect', copyDate(unselectedDate));
        } else if (props.maxRange && currentDate.length >= props.maxRange) {
          Toast(props.rangePrompt || t('rangePrompt', props.maxRange));
        } else {
          select([...currentDate, date]);
        }
      } else {
        select(date, true);
      }
    };

    const togglePopup = (val) => {
      emit('update:show', val);
    };

    const onUpdateHeight = (height) => {
      state.realRowHeight = height;
    };

    const renderMonth = (date, index) => {
      const showMonthTitle = index !== 0 || !props.showSubtitle;
      return (
        <Month
          ref={setMonthRefs(index)}
          date={date}
          currentDate={state.currentDate}
          realRowHeight={state.realRowHeight}
          showMonthTitle={showMonthTitle}
          firstDayOfWeek={dayOffset.value}
          {...pick(props, [
            'type',
            'color',
            'minDate',
            'maxDate',
            'showMark',
            'formatter',
            'rowHeight',
            'lazyRender',
            'showSubtitle',
            'allowSameDay',
          ])}
          onClick={onClickDay}
          onUpdate-height={onUpdateHeight}
        />
      );
    };

    const renderFooterButton = () => {
      if (slots.footer) {
        return slots.footer();
      }

      if (props.showConfirm) {
        const text = buttonDisabled.value
          ? props.confirmDisabledText
          : props.confirmText;

        return (
          <Button
            round
            block
            type="danger"
            color={props.color}
            class={bem('confirm')}
            disabled={buttonDisabled.value}
            nativeType="button"
            onClick={onConfirm}
          >
            {text || t('confirm')}
          </Button>
        );
      }
    };

    const renderFooter = () => (
      <div class={bem('footer', { unfit: !props.safeAreaInsetBottom })}>
        {renderFooterButton()}
      </div>
    );

    const renderCalendar = () => (
      <div class={bem()}>
        <Header
          v-slots={{ title: slots.title }}
          title={props.title}
          showTitle={props.showTitle}
          subtitle={state.subtitle}
          showSubtitle={props.showSubtitle}
          firstDayOfWeek={dayOffset.value}
        />
        <div ref={bodyRef} class={bem('body')} onScroll={onScroll}>
          {months.value.map(renderMonth)}
        </div>
        {renderFooter()}
      </div>
    );

    watch(() => props.show, init);
    watch(() => props.type, reset);
    watch(
      () => props.defaultDate,
      (value) => {
        state.currentDate = value;
        scrollIntoView();
      }
    );

    onMounted(init);
    onActivated(init);

    useExpose({ reset });

    return () => {
      if (props.poppable) {
        return (
          <Popup
            show={props.show}
            class={bem('popup')}
            round={props.round}
            position={props.position}
            closeable={props.showTitle || props.showSubtitle}
            teleport={props.teleport}
            closeOnPopstate={props.closeOnPopstate}
            closeOnClickOverlay={props.closeOnClickOverlay}
            {...{ 'onUpdate:show': togglePopup }}
          >
            {renderCalendar()}
          </Popup>
        );
      }

      return renderCalendar();
    };
  },
});
