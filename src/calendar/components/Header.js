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

  setup(props, { slots }) {
    const renderTitle = () => {
      if (props.showTitle) {
        const text = props.title || t('title');
        const title = slots.title ? slots.title : text;
        return <div class={bem('header-title')}>{title}</div>;
      }
    };

    const renderSubtitle = () => {
      if (props.showSubtitle) {
        return <div class={bem('header-subtitle')}>{props.subtitle}</div>;
      }
    };

    const renderWeekDays = () => {
      const { firstDayOfWeek } = props;
      const weekdays = t('weekdays');
      const renderWeekDays = [
        ...weekdays.slice(firstDayOfWeek, 7),
        ...weekdays.slice(0, firstDayOfWeek),
      ];

      return (
        <div class={bem('weekdays')}>
          {renderWeekDays.map((text) => (
            <span class={bem('weekday')}>{text}</span>
          ))}
        </div>
      );
    };

    return () => (
      <div class={bem('header')}>
        {renderTitle()}
        {renderSubtitle()}
        {renderWeekDays()}
      </div>
    );
  },
});
