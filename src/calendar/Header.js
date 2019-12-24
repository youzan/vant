import { createNamespace } from '../utils';
import { t, formatMonthTitle } from './utils';

const [createComponent, bem] = createNamespace('calendar-header');

export default createComponent({
  props: {
    title: String,
    currentMonth: Date
  },

  methods: {
    genTitle() {
      if (this.title) {
        return <div class={bem('title')}>{this.title}</div>;
      }
    },

    genMonth() {
      return (
        <div class={bem('month')}>
          {formatMonthTitle(this.currentMonth)}
        </div>
      );
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
    }
  },

  render() {
    return (
      <div class={bem()}>
        {this.genTitle()}
        {this.genMonth()}
        {this.genWeekDays()}
      </div>
    );
  }
});
