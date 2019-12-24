import { createNamespace } from '../utils';
import { isDate } from '../utils/validate/date';
import { compareMonth } from './utils';

const [createComponent, bem, t] = createNamespace('calendar');

function formatMonthTitle(date) {
  return t('monthTitle', date.getFullYear(), date.getMonth() + 1);
}

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
      currentDate: this.minDate
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
          days: getDays(cursor)
        });

        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, maxDate) !== 1);

      return months;
    }
  },

  methods: {
    genTitle() {
      if (this.title) {
        return <div class={bem('title')}>{this.title}</div>;
      }
    },

    genWeekDays() {
      const weekdays = t('weekdays');

      return (
        <div class={bem('weekdays')}>
          {weekdays.map(item => (
            <span class={bem('weekday')}>{item}</span>
          ))}
        </div>
      );
    },

    genMonthTitle(date) {
      return <div class={bem('month-title')}>{formatMonthTitle(date)}</div>;
    },

    genMonth(monthItem, index) {
      const Title = index !== 0 ? this.genMonthTitle(monthItem.date) : null;

      return (
        <div class={bem('month')}>
          {Title}
          <div class={bem('days')}>
            {monthItem.days.map(dayItem => (
              <div class={bem('day')}>{dayItem.day}</div>
            ))}
          </div>
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem()}>
        <div class={bem('header')}>
          {this.genTitle()}
          {this.genMonthTitle(this.currentDate)}
          {this.genWeekDays()}
        </div>
        <div class={bem('body')}>{this.months.map(this.genMonth)}</div>
      </div>
    );
  }
});
