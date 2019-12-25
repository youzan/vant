import { createNamespace } from '../../utils';
import { t, bem } from '../utils';

const [createComponent] = createNamespace('calendar-month');

export default createComponent({
  props: {
    date: Date,
    days: Array,
    title: String
  },

  mounted() {
    this.height = this.$el.getBoundingClientRect().height;
  },

  methods: {
    getLabel(item) {
      if (item.type === 'start') {
        return t('start');
      }

      if (item.type === 'end') {
        return t('end');
      }
    },

    genTitle() {
      if (this.title) {
        return <div class={bem('month-title')}>{this.title}</div>;
      }
    },

    genDay(item) {
      const { type } = item;

      const onClick = () => {
        if (type !== 'disabled') {
          this.$emit('click', item);
        }
      };

      if (type === 'selected') {
        return (
          <div class={bem('day')} onClick={onClick}>
            <div class={bem('selected-day')}>{item.day}</div>
          </div>
        );
      }

      const label = this.getLabel(item);
      const Label = label && <div class={bem('day-label')}>{label}</div>;

      return (
        <div class={bem('day', [type])} onClick={onClick}>
          {item.day}
          {Label}
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem('month')}>
        {this.genTitle()}
        <div class={bem('days')}>
          <div class={bem('month-mark')}>{this.date.getMonth() + 1}</div>
          {this.days.map(this.genDay)}
        </div>
      </div>
    );
  }
});
