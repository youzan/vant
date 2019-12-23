import { createNamespace } from '../utils';
import { isDate } from '../utils/validate/date';

const [createComponent, bem, t] = createNamespace('calendar');
const now = new Date();

export default createComponent({
  props: {
    title: String,
    minDate: {
      type: Date,
      default: () => new Date(now),
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: () => new Date(now.getFullYear(), now.getMonth() + 6, now.getDate()),
      validator: isDate
    }
  },

  data() {
    return {};
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

    genMonth() {}
  },

  render() {
    return (
      <div class={bem()}>
        {this.genTitle()}
        {this.genWeekDays()}
        <div class={bem('body')}></div>
      </div>
    );
  }
});
