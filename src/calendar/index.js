import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import {
  t,
  bem,
  getNextDay,
  compareDay,
  compareMonth,
  createComponent
} from './utils';

import Button from '../button';
import Month from './components/Month';
import Header from './components/Header';

export default createComponent({
  props: {
    title: String,
    value: [Date, Array],
    buttonText: String,
    buttonDisabledText: String,
    type: {
      type: String,
      default: 'single'
    },
    minDate: {
      type: Date,
      default: () => new Date(),
      validator: isDate
    },
    maxDate: {
      type: Date,
      default() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      },
      validator: isDate
    },
    rowHeight: {
      type: Number,
      default: 64
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
      currentValue: this.getDefaultValue()
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
    value(val) {
      this.currentValue = val;
    }
  },

  mounted() {
    this.bodyHeight = this.$refs.body.getBoundingClientRect().height;
    this.onScroll();
  },

  methods: {
    getDefaultValue() {
      const { type, value, minDate } = this;

      if (type === 'single') {
        return value || minDate;
      }

      if (type === 'range') {
        const range = value || [];
        return [range[0] || minDate, range[1] || getNextDay(minDate)];
      }
    },

    onScroll() {
      const { body, months } = this.$refs;
      const top = getScrollTop(body);
      const bottom = top + this.bodyHeight;
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
        this.$emit('input', date);
        this.$emit('select', date);
      }

      if (this.type === 'range') {
        const [startDay, endDay] = this.currentValue;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.$emit('input', [startDay, date]);
          }

          if (compareToStart === -1) {
            this.$emit('input', [date, null]);
          }
        } else {
          this.$emit('input', [date, null]);
        }
      }
    },

    onConfirmRange() {
      this.$emit('input', this.currentValue);
      this.$emit('select', this.currentValue);
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
          currentValue={this.currentValue}
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
        const disabled = !this.currentValue[1];
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
