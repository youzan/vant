import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import { createComponent, bem, compareMonth, formatMonthTitle } from './utils';
import Header from './Header';

export default createComponent({
  props: {
    value: Date,
    title: String,
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
    this.initRects();
  },

  methods: {
    initRects() {
      this.monthsHeight = this.$refs.month.map(
        month => month.getBoundingClientRect().height
      );
    },

    getDays(date) {
      const days = [];
      const { minDate, maxDate } = this;
      const checkMinDate = compareMonth(date, minDate) === 0;
      const checkMaxDate = compareMonth(date, maxDate) === 0;
      const checkSelected =
        this.value &&
        this.type === 'single' &&
        compareMonth(date, this.value) === 0;

      const isDisabled = date => {
        if (checkMaxDate && date.getDate() > maxDate.getDate()) {
          return true;
        }

        if (checkMinDate && date.getDate() < minDate.getDate()) {
          return true;
        }

        return false;
      };

      const isSelected = date =>
        checkSelected && date.getDate() === this.value.getDate();

      const placeholderCount = date.getDay() === 0 ? 6 : date.getDay() - 1;

      for (let i = 1; i <= placeholderCount; i++) {
        days.push({ day: '' });
      }

      const cursor = new Date(date);

      do {
        days.push({
          day: cursor.getDate(),
          date: new Date(cursor),
          disabled: isDisabled(cursor),
          selected: isSelected(cursor)
        });

        cursor.setDate(cursor.getDate() + 1);
      } while (compareMonth(cursor, date) === 0);

      return days;
    },

    genMonth(month, index) {
      const Title = index !== 0 && (
        <div class={bem('month-title')}>{month.title}</div>
      );

      const Days = month.days.map(item => {
        const onClick = () => {
          this.onClickDay(item);
        };

        if (item.selected) {
          return (
            <div class={bem('day')} onClick={onClick}>
              <div class={bem('selected-day')}>{item.day}</div>
            </div>
          );
        }

        return (
          <div
            class={bem('day', { disabled: item.disabled })}
            onClick={onClick}
          >
            {item.day}
          </div>
        );
      });

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
    },

    onClickDay(item) {
      if (item.disabled) {
        return;
      }

      if (this.type === 'single') {
        this.$emit('input', item.date);
        this.$emit('select', item.date);
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
