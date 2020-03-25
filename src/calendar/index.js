// Utils
import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import {
  t,
  bem,
  copyDates,
  getNextDay,
  compareDay,
  compareMonth,
  createComponent,
  calcDateNum,
  ROW_HEIGHT,
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
    formatter: Function,
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    getContainer: [String, Function],
    allowSameDay: Boolean,
    closeOnPopstate: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single',
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
    position: {
      type: String,
      default: 'bottom',
    },
    rowHeight: {
      type: [Number, String],
      default: ROW_HEIGHT,
    },
    round: {
      type: Boolean,
      default: true,
    },
    poppable: {
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
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    maxRange: {
      type: [Number, String],
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

      if (type === 'range') {
        return !currentDate[0] || !currentDate[1];
      }

      if (type === 'multiple') {
        return !currentDate.length;
      }

      return !currentDate;
    },
  },

  watch: {
    type: 'reset',

    value(val) {
      if (val) {
        this.initRect();
        this.scrollIntoView();
      }
    },

    defaultDate(val) {
      this.currentDate = val;
      this.scrollIntoView();
    },
  },

  mounted() {
    if (this.value || !this.poppable) {
      this.initRect();
      this.scrollIntoView();
    }
  },

  methods: {
    // @exposed-api
    reset() {
      this.currentDate = this.getInitialDate();
      this.scrollIntoView();
    },

    initRect() {
      this.$nextTick(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        this.bodyHeight = Math.floor(
          this.$refs.body.getBoundingClientRect().height
        );
        this.onScroll();
      });
    },

    // scroll to current month
    scrollIntoView() {
      this.$nextTick(() => {
        const { currentDate } = this;
        const targetDate =
          this.type === 'single' ? currentDate : currentDate[0];
        const displayed = this.value || !this.poppable;

        /* istanbul ignore if */
        if (!targetDate || !displayed) {
          return;
        }

        this.months.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            this.$refs.months[index].scrollIntoView();
            return true;
          }

          return false;
        });
      });
    },

    getInitialDate() {
      const { type, defaultDate, minDate } = this;

      if (type === 'range') {
        const [startDay, endDay] = defaultDate || [];
        return [startDay || minDate, endDay || getNextDay(minDate)];
      }

      if (type === 'multiple') {
        return defaultDate || [minDate];
      }

      return defaultDate || minDate;
    },

    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll() {
      const { body, months } = this.$refs;
      const top = getScrollTop(body);
      const bottom = top + this.bodyHeight;
      const heights = months.map(item => item.height);
      const heightSum = heights.reduce((a, b) => a + b, 0);

      // iOS scroll bounce may exceed the range
      /* istanbul ignore next */
      if (top < 0 || (bottom > heightSum && top > 0)) {
        return;
      }

      let height = 0;
      let currentMonth;

      for (let i = 0; i < months.length; i++) {
        const visible = height <= bottom && height + heights[i] >= top;

        if (visible && !currentMonth) {
          currentMonth = months[i];
        }

        months[i].visible = visible;
        height += heights[i];
      }

      /* istanbul ignore else */
      if (currentMonth) {
        this.subtitle = currentMonth.title;
      }
    },

    onClickDay(item) {
      const { date } = item;
      const { type, currentDate } = this;

      if (type === 'range') {
        const [startDay, endDay] = currentDate;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (this.allowSameDay) {
            this.select([date, date]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        let selectedIndex;

        const selected = this.currentDate.some((dateItem, index) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        });

        if (selected) {
          currentDate.splice(selectedIndex, 1);
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
      this.currentDate = date;
      this.$emit('select', copyDates(this.currentDate));

      if (complete && this.type === 'range') {
        const valid = this.checkRange();

        if (!valid) {
          return;
        }
      }

      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },

    checkRange() {
      const { maxRange, currentDate, rangePrompt } = this;

      if (maxRange && calcDateNum(currentDate) > maxRange) {
        Toast(rangePrompt || t('rangePrompt', maxRange));
        return false;
      }

      return true;
    },

    onConfirm() {
      if (this.type === 'range' && !this.checkRange()) {
        return;
      }

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
          currentDate={this.currentDate}
          showSubtitle={this.showSubtitle}
          allowSameDay={this.allowSameDay}
          showMonthTitle={showMonthTitle}
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
        <div
          class={bem('footer', {
            'safe-area-inset-bottom': this.safeAreaInsetBottom,
          })}
        >
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
      const createListener = name => () => this.$emit(name);

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
