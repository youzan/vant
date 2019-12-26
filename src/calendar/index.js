import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import {
  t,
  bem,
  getNextDay,
  compareDay,
  compareMonth,
  createComponent,
  ROW_HEIGHT,
  RENDER_OFFSET
} from './utils';

import Button from '../button';
import Month from './components/Month';
import Header from './components/Header';

export default createComponent({
  props: {
    title: String,
    buttonText: String,
    defaultDate: [Date, Array],
    buttonDisabledText: String,
    type: {
      type: String,
      default: 'single'
    },
    minDate: {
      type: Date,
      validator: isDate,
      default: () => new Date()
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      }
    },
    rowHeight: {
      type: Number,
      default: ROW_HEIGHT
    },
    showMark: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      monthTitle: '',
      currentDate: this.getInitialDate()
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
    }
  },

  watch: {
    defaultDate(val) {
      this.currentDate = val;
    }
  },

  mounted() {
    this.bodyHeight = this.$refs.body.getBoundingClientRect().height;
    this.onScroll();
  },

  methods: {
    getInitialDate() {
      const { type, defaultDate, minDate } = this;

      if (type === 'single') {
        return defaultDate || minDate;
      }

      if (type === 'range') {
        const [startDay, endDay] = defaultDate || [];
        return [startDay || minDate, endDay || getNextDay(minDate)];
      }
    },

    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll() {
      const { body, months } = this.$refs;
      const scrollTop = getScrollTop(body);
      const top = scrollTop - RENDER_OFFSET;
      const bottom = scrollTop + this.bodyHeight + RENDER_OFFSET;
      const heights = months.map(item => item.height);

      let height = 0;
      let firstMonth;

      for (let i = 0; i < months.length; i++) {
        const visible = height <= bottom && height + heights[i] >= top;

        if (visible && !firstMonth) {
          firstMonth = months[i];
        }

        months[i].visible = visible;
        height += heights[i];
      }

      if (firstMonth) {
        this.monthTitle = firstMonth.title;
      }
    },

    onClickDay(item) {
      const { date } = item;

      if (this.type === 'single') {
        this.currentDate = date;
        this.$emit('select', date);
      }

      if (this.type === 'range') {
        const [startDay, endDay] = this.currentDate;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.currentDate = [startDay, date];
          }

          if (compareToStart === -1) {
            this.currentDate = [date, null];
          }
        } else {
          this.currentDate = [date, null];
        }
      }
    },

    onConfirmRange() {
      this.$emit('select', this.currentDate);
    },

    genMonth(date, index) {
      return (
        <Month
          ref="months"
          refInFor
          type={this.type}
          date={date}
          minDate={this.minDate}
          maxDate={this.maxDate}
          showMark={this.showMark}
          rowHeight={this.rowHeight}
          showTitle={index !== 0}
          currentDate={this.currentDate}
          onClick={this.onClickDay}
        />
      );
    },

    genFooterContent() {
      const slot = this.slots('footer');

      if (slot) {
        return slot;
      }

      if (this.type === 'range') {
        const disabled = !this.currentDate[1];
        const text = disabled ? this.buttonDisabledText : this.buttonText;

        return (
          <Button
            round
            block
            type="danger"
            disabled={disabled}
            class={bem('confirm')}
            onClick={this.onConfirmRange}
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
            'safe-area-inset-bottom': this.safeAreaInsetBottom
          })}
        >
          {this.genFooterContent()}
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem()}>
        <Header
          title={this.title}
          monthTitle={this.monthTitle}
          scopedSlots={{
            title: () => this.slots('title')
          }}
        />
        <div ref="body" class={bem('body')} onScroll={this.onScroll}>
          {this.months.map(this.genMonth)}
        </div>
        {this.genFooter()}
      </div>
    );
  }
});
