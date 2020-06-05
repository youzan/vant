import { createNamespace } from '../../utils';
import { t, bem } from '../utils';

const [createComponent] = createNamespace('calendar-header');

export default createComponent({
  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
  },

  methods: {
    genTitle() {
      if (this.showTitle) {
        const title = this.slots('title') || this.title || t('title');
        return <div class={bem('header-title')}>{title}</div>;
      }
    },

    genSubtitle() {
      if (this.showSubtitle) {
        return <div class={bem('header-subtitle')}>{this.subtitle}</div>;
      }
    },

    genWeekDays() {
      const weekdays = t('weekdays');

      const { firstDayOfWeek } = this;

      const renderWeekDays = !firstDayOfWeek
        ? weekdays
        : new Array(7).fill(0).map((_, index) => {
            const fakeIndex = index + firstDayOfWeek;
            const keyIndex = fakeIndex <= 6 ? fakeIndex : fakeIndex - 7;

            return weekdays.slice(keyIndex, keyIndex + 1);
          });

      return (
        <div class={bem('weekdays')}>
          {renderWeekDays.map((item) => (
            <span class={bem('weekday')}>{item}</span>
          ))}
        </div>
      );
    },
  },

  render() {
    return (
      <div class={bem('header')}>
        {this.genTitle()}
        {this.genSubtitle()}
        {this.genWeekDays()}
      </div>
    );
  },
});
