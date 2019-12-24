import { isDate } from '../utils/validate/date';
import { createComponent, bem, compareMonth, formatMonthTitle } from './utils';
import Header from './Header';

function getDays(date) {
  const days = [];
  const cursor = new Date(date);
  const placeholderCount = cursor.getDay() === 0 ? 6 : cursor.getDay() - 1;

  for (let i = 1; i <= placeholderCount; i++) {
    days.push({ day: '' });
  }

  do {
    days.push({
      day: cursor.getDate(),
      date: new Date(cursor)
    });

    cursor.setDate(cursor.getDate() + 1);
  } while (compareMonth(cursor, date) === 0);

  return days;
}

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
          days: getDays(cursor),
          title: formatMonthTitle(cursor)
        });

        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, maxDate) !== 1);

      return months;
    }
  },

  methods: {
    genMonth(month, index) {
      const showTitle = index !== 0;

      return (
        <div class={bem('month')}>
          {showTitle && <div class={bem('month-title')}>{month.title}</div>}
          <div class={bem('days')}>
            {month.days.map(item => (
              <div class={bem('day')}>{item.day}</div>
            ))}
          </div>
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem()}>
        <Header title={this.title} currentMonth={this.currentMonth} />
        <div class={bem('body')}>{this.months.map(this.genMonth)}</div>
      </div>
    );
  }
});
