import { use } from '../utils';
import { GREEN } from '../utils/color';
import Icon from '../icon';

const [sfc, bem] = use('steps');

export default sfc({
  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },

  data() {
    return {
      steps: []
    };
  },

  render(h) {
    const { icon, title, description, slots } = this;

    const StatusIcon = (slots('icon') || icon) && (
      <div class={bem('icon')}>{slots('icon') || <Icon name={icon} class={this.iconClass} />}</div>
    );

    const StatusMessage = (
      <div class={bem('message')}>
        <div class={bem('title')}>{title}</div>
        <div class={[bem('desc'), 'van-ellipsis']}>{description}</div>
      </div>
    );

    return (
      <div class={bem([this.direction])}>
        {(title || description) && (
          <div class={bem('status')}>
            {StatusIcon}
            {StatusMessage}
            {slots('message-extra')}
          </div>
        )}
        <div class={bem('items', { alone: !title && !description })}>{slots()}</div>
      </div>
    );
  }
});
