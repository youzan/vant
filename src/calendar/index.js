import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import { createComponent, bem, compareMonth, formatMonthTitle } from './utils';
import Header from './Header';

export default createComponent({
  props: {
    title: String,
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
    this.monthsHeight = [];

    return {
      currentMonth: this.minDate
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

  mounted() {
    this.getMonthsHeight();
  },

  methods: {
    getMonthsHeight() {
      this.$refs.month.forEach((month, index) => {
        this.monthsHeight[index] = month.getBoundingClientRect().height;
      });
    },

    getDays(date) {
      const days = [];
      const { minDate, maxDate } = this;
      const checkMinDate = compareMonth(date, minDate) === 0;
      const checkMaxDate = compareMonth(date, maxDate) === 0;

      function isDisabled(date) {
        if (checkMaxDate && date.getDate() > maxDate.getDate()) {
          return true;
        }

        if (checkMinDate && date.getDate() < minDate.getDate()) {
          return true;
        }

        return false;
      }

      const placeholderCount = date.getDay() === 0 ? 6 : date.getDay() - 1;

      for (let i = 1; i <= placeholderCount; i++) {
        days.push({ day: '' });
      }

      const cursor = new Date(date);

      do {
        days.push({
          day: cursor.getDate(),
          date: new Date(cursor),
          disabled: isDisabled(cursor)
        });

        cursor.setDate(cursor.getDate() + 1);
      } while (compareMonth(cursor, date) === 0);

      return days;
    },

    genMonth(month, index) {
      const Title = index !== 0 && (
        <div class={bem('month-title')}>{month.title}</div>
      );

      const Days = month.days.map(item => (
        <div class={bem('day', { disabled: item.disabled })}>{item.day}</div>
      ));

      return (
        <div class={bem('month')} ref="month" refInFor>
          {Title}
          <div class={bem('days')}>
            <div class={bem('month-mark')}>{month.date.getMonth() + 1}</div>
            {Days}
          </div>
        </div>
      );
    },

    onScroll() {
      const scrollTop = getScrollTop(this.$refs.body);
      let height = 0;

      for (let i = 0; i < this.months.length; i++) {
        if (scrollTop < height) {
          this.currentMonth = this.months[i - 1].date;
          return;
        }

        height += this.monthsHeight[i];
      }
    }
  },

  render() {
    return (
      <div class={bem()}>
        <Header title={this.title} currentMonth={this.currentMonth} />
        <div ref="body" class={bem('body')} onScroll={this.onScroll}>
          {this.months.map(this.genMonth)}
        </div>
      </div>
    );
  }
});
