import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { t, bem } from './utils';

const [name] = createNamespace('calendar-header');

export default defineComponent({
  name,

  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
  },

  emits: ['click-subtitle'],

  setup(props, { slots, emit }) {
    const renderTitle = () => {
      if (props.showTitle) {
        const text = props.title || t('title');
        const title = slots.title ? slots.title() : text;
        return <div class={bem('header-title')}>{title}</div>;
      }
    };

    const onClickSubtitle = (event: MouseEvent) => {
      emit('click-subtitle', event);
    };

    const renderSubtitle = () => {
      if (props.showSubtitle) {
        const title = slots.subtitle ? slots.subtitle() : props.subtitle;
        return (
          <div class={bem('header-subtitle')} onClick={onClickSubtitle}>
            {title}
          </div>
        );
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
