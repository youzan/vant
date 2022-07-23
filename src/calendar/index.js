// Utils
import { raf } from '../utils/dom/raf';
import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
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

// Components
import Popup from '../popup';
import Button from '../button';
import Toast from '../toast';
import Month from './components/Month';
import Header from './components/Header';

export default createComponent({
  props: {
    title: String,
    color: String,
    value: Boolean,
    readonly: Boolean,
    formatter: Function,
    rowHeight: [Number, String],
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    getContainer: [String, Function],
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

  inject: {
    vanPopup: {
      default: null,
    },
  },

  data() {
    return {
      subtitle: '',
      currentDate: this.getInitialDate(),
    };
  },

  computed: {
    months() {
      const months = [];
      const cursor = new Date(this.minDate);

      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, this.maxDate) !== 1);

      return months;
    },

    buttonDisabled() {
      const { type, currentDate } = this;

      if (currentDate) {
        if (type === 'range') {
          return !currentDate[0] || !currentDate[1];
        }
        if (type === 'multiple') {
          return !currentDate.length;
        }
      }

      return !currentDate;
    },

    dayOffset() {
      return this.firstDayOfWeek ? this.firstDayOfWeek % 7 : 0;
    },
  },

  watch: {
    value: 'init',

    type() {
      this.reset();
    },

    defaultDate(val) {
      this.currentDate = val;
      this.scrollIntoView();
    },
  },

  mounted() {
    this.init();
    // https://github.com/vant-ui/vant/issues/9845
    this.vanPopup?.$on('opened', this.onScroll);
  },

  /* istanbul ignore next */
  activated() {
    this.init();
  },

  methods: {
    // @exposed-api
    reset(date = this.getInitialDate()) {
      this.currentDate = date;
      this.scrollIntoView();
    },

    init() {
      if (this.poppable && !this.value) {
        return;
      }

      this.$nextTick(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/vant-ui/vant/issues/5640
        this.bodyHeight = Math.floor(
          this.$refs.body.getBoundingClientRect().height
        );
        this.onScroll();
        this.scrollIntoView();
      });
    },

    // @exposed-api
    scrollToDate(targetDate) {
      raf(() => {
        const displayed = this.value || !this.poppable;

        /* istanbul ignore if */
        if (!targetDate || !displayed) {
          return;
        }

        this.months.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            const { body, months } = this.$refs;
            months[index].scrollIntoView(body);
            return true;
          }

          return false;
        });

        this.onScroll();
      });
    },

    // scroll to current month
    scrollIntoView() {
      const { currentDate } = this;

      if (currentDate) {
        const targetDate =
          this.type === 'single' ? currentDate : currentDate[0];
        this.scrollToDate(targetDate);
      }
    },

    getInitialDate() {
      const { type, minDate, maxDate, defaultDate } = this;

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
    },

    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll() {
      const { body, months } = this.$refs;
      const top = getScrollTop(body);
      const bottom = top + this.bodyHeight;
      const heights = months.map((item) => item.getHeight());
      const heightSum = heights.reduce((a, b) => a + b, 0);

      // iOS scroll bounce may exceed the range
      if (bottom > heightSum && top > 0) {
        return;
      }

      let height = 0;
      let currentMonth;
      const visibleRange = [-1, -1];

      for (let i = 0; i < months.length; i++) {
        const visible = height <= bottom && height + heights[i] >= top;

        if (visible) {
          visibleRange[1] = i;

          if (!currentMonth) {
            currentMonth = months[i];
            visibleRange[0] = i;
          }

          if (!months[i].showed) {
            months[i].showed = true;
            this.$emit('month-show', {
              date: months[i].date,
              title: months[i].title,
            });
          }
        }

        height += heights[i];
      }

      months.forEach((month, index) => {
        month.visible =
          index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
      });

      /* istanbul ignore else */
      if (currentMonth) {
        this.subtitle = currentMonth.title;
      }
    },

    onClickDay(item) {
      if (this.readonly) {
        return;
      }

      const { date } = item;
      const { type, currentDate } = this;

      if (type === 'range') {
        if (!currentDate) {
          this.select([date, null]);
          return;
        }

        const [startDay, endDay] = currentDate;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (this.allowSameDay) {
            this.select([date, date], true);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        if (!currentDate) {
          this.select([date]);
          return;
        }

        let selectedIndex;
        const selected = this.currentDate.some((dateItem, index) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        });

        if (selected) {
          const [unselectedDate] = currentDate.splice(selectedIndex, 1);
          this.$emit('unselect', copyDate(unselectedDate));
        } else if (this.maxRange && currentDate.length >= this.maxRange) {
          Toast(this.rangePrompt || t('rangePrompt', this.maxRange));
        } else {
          this.select([...currentDate, date]);
        }
      } else {
        this.select(date, true);
      }
    },

    togglePopup(val) {
      this.$emit('input', val);
    },

    select(date, complete) {
      const emit = (date) => {
        this.currentDate = date;
        this.$emit('select', copyDates(this.currentDate));
      };

      if (complete && this.type === 'range') {
        const valid = this.checkRange(date);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.showConfirm) {
            emit([date[0], getDayByOffset(date[0], this.maxRange - 1)]);
          } else {
            emit(date);
          }
          return;
        }
      }

      emit(date);

      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },

    checkRange(date) {
      const { maxRange, rangePrompt } = this;

      if (maxRange && calcDateNum(date) > maxRange) {
        Toast(rangePrompt || t('rangePrompt', maxRange));
        return false;
      }

      return true;
    },

    onConfirm() {
      this.$emit('confirm', copyDates(this.currentDate));
    },

    genMonth(date, index) {
      const showMonthTitle = index !== 0 || !this.showSubtitle;
      return (
        <Month
          ref="months"
          refInFor
          date={date}
          type={this.type}
          color={this.color}
          minDate={this.minDate}
          maxDate={this.maxDate}
          showMark={this.showMark}
          formatter={this.formatter}
          rowHeight={this.rowHeight}
          lazyRender={this.lazyRender}
          currentDate={this.currentDate}
          showSubtitle={this.showSubtitle}
          allowSameDay={this.allowSameDay}
          showMonthTitle={showMonthTitle}
          firstDayOfWeek={this.dayOffset}
          scopedSlots={{
            'top-info': this.$scopedSlots['top-info'],
            'bottom-info': this.$scopedSlots['bottom-info'],
          }}
          onClick={this.onClickDay}
        />
      );
    },

    genFooterContent() {
      const slot = this.slots('footer');

      if (slot) {
        return slot;
      }

      if (this.showConfirm) {
        const text = this.buttonDisabled
          ? this.confirmDisabledText
          : this.confirmText;

        return (
          <Button
            round
            block
            type="danger"
            color={this.color}
            class={bem('confirm')}
            disabled={this.buttonDisabled}
            nativeType="button"
            onClick={this.onConfirm}
          >
            {text || t('confirm')}
          </Button>
        );
      }
    },

    genFooter() {
      return (
        <div class={bem('footer', { unfit: !this.safeAreaInsetBottom })}>
          {this.genFooterContent()}
        </div>
      );
    },

    genCalendar() {
      return (
        <div class={bem()}>
          <Header
            title={this.title}
            showTitle={this.showTitle}
            subtitle={this.subtitle}
            showSubtitle={this.showSubtitle}
            scopedSlots={{
              title: () => this.slots('title'),
            }}
            firstDayOfWeek={this.dayOffset}
          />
          <div ref="body" class={bem('body')} onScroll={this.onScroll}>
            {this.months.map(this.genMonth)}
          </div>
          {this.genFooter()}
        </div>
      );
    },
  },

  render() {
    if (this.poppable) {
      const createListener = (name) => () => this.$emit(name);

      return (
        <Popup
          round
          class={bem('popup')}
          value={this.value}
          round={this.round}
          position={this.position}
          closeable={this.showTitle || this.showSubtitle}
          getContainer={this.getContainer}
          closeOnPopstate={this.closeOnPopstate}
          closeOnClickOverlay={this.closeOnClickOverlay}
          onInput={this.togglePopup}
          onOpen={createListener('open')}
          onOpened={createListener('opened')}
          onClose={createListener('close')}
          onClosed={createListener('closed')}
        >
          {this.genCalendar()}
        </Popup>
      );
    }

    return this.genCalendar();
  },
});
