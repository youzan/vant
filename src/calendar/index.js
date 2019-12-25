import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import {
  t,
  bem,
  getNextDay,
  compareDay,
  compareMonth,
  createComponent,
  formatMonthTitle
} from './utils';
import Month from './Month';
import Header from './Header';
import Button from '../button';

export default createComponent({
  props: {
    title: String,
    value: [Date, Array],
    confirmText: String,
    confirmDisabledText: String,
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
      default: () => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      },
      validator: isDate
    }
  },

  data() {
    return {
      currentMonth: this.minDate,
      currentValue: this.getDefaultValue()
    };
  },

  computed: {
    months() {
      const months = [];
      const { minDate, maxDate } = this;

      const cursor = new Date(minDate);
      cursor.setDate(1);

      do {
        months.push({
          date: new Date(cursor),
          days: this.getDays(cursor),
          title: formatMonthTitle(cursor)
        });

        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, maxDate) !== 1);

      return months;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    }
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

    getDayType(day) {
      const { type, minDate, maxDate, currentValue } = this;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (type === 'single') {
        return compareDay(day, currentValue) === 0 ? 'selected' : '';
      }

      if (type === 'range') {
        if (!currentValue[0]) {
          return;
        }

        const compareWithStart = compareDay(day, currentValue[0]);
        if (compareWithStart === 0) {
          return 'start';
        }

        if (!currentValue[1]) {
          return;
        }

        const compareWithEnd = compareDay(day, currentValue[1]);
        if (compareWithEnd === 0) {
          return 'end';
        }

        if (compareWithStart > 0 && compareWithEnd < 0) {
          return 'middle';
        }
      }
    },

    getDays(date) {
      const days = [];
      const placeholderCount = date.getDay() === 0 ? 6 : date.getDay() - 1;

      for (let i = 1; i <= placeholderCount; i++) {
        days.push({ day: '' });
      }

      const cursor = new Date(date);

      do {
        days.push({
          day: cursor.getDate(),
          date: new Date(cursor),
          type: this.getDayType(cursor)
        });

        cursor.setDate(cursor.getDate() + 1);
      } while (compareMonth(cursor, date) === 0);

      return days;
    },

    genMonth(month, index) {
      return (
        <Month
          ref="month"
          refInFor
          days={month.days}
          date={month.date}
          title={index !== 0 ? month.title : ''}
          onClick={this.onClickDay}
        />
      );
    },

    onScroll() {
      const scrollTop = getScrollTop(this.$refs.body);
      const monthsHeight = this.$refs.month.map(item => item.height);
      let height = 0;

      for (let i = 0; i < this.months.length; i++) {
        if (scrollTop < height) {
          this.currentMonth = this.months[i - 1].date;
          return;
        }

        height += monthsHeight[i];
      }
    },

    onClickDay(item) {
      const { date } = item;

      if (this.type === 'single') {
        this.$emit('input', date);
        this.$emit('select', date);
      }

      if (this.type === 'range') {
        const startDay = this.currentValue[0];
        const endDay = this.currentValue[1];

        if (startDay && endDay) {
          this.$emit('input', [date, null]);
          return;
        }

        if (startDay) {
          const compareWithStart = compareDay(date, startDay);

          if (compareWithStart === 1) {
            this.$emit('input', [startDay, date]);
          }

          if (compareWithStart === -1) {
            this.$emit('input', [date, null]);
          }
        }
      }
    },

    onConfirmRange() {
      this.$emit('input', this.currentValue);
      this.$emit('select', this.currentValue);
    },

    genFooter() {
      if (this.type === 'range') {
        const disabled = !this.currentValue[1];
        const text = disabled ? this.confirmDisabledText : this.confirmText;

        return (
          <div class={bem('footer')}>
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
          </div>
        );
      }
    }
  },

  render() {
    return (
      <div class={bem()}>
        <Header
          title={this.title}
          currentMonth={this.currentMonth}
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
