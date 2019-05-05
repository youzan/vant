import { use } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('step');

export default sfc({
  beforeCreate() {
    const { steps } = this.$parent;
    const index = this.$parent.slots().indexOf(this.$vnode);
    steps.splice(index === -1 ? steps.length : index, 0, this);
  },

  beforeDestroy() {
    const index = this.$parent.steps.indexOf(this);
    if (index > -1) {
      this.$parent.steps.splice(index, 1);
    }
  },

  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this);
      const { active } = this.$parent;

      if (index < active) {
        return 'finish';
      }
      if (index === active) {
        return 'process';
      }
    }
  },

  render(h) {
    const { slots, status } = this;
    const { activeIcon, activeColor, inactiveIcon, direction } = this.$parent;
    const titleStyle = status === 'process' && { color: activeColor };

    function Circle() {
      if (status === 'process') {
        return (
          slots('active-icon') || (
            <Icon class={bem('icon')} name={activeIcon} color={activeColor} />
          )
        );
      }

      const inactiveIconSlot = slots('inactive-icon');
      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || <Icon class={bem('icon')} name={inactiveIcon} />;
      }

      return <i class={bem('circle')} />;
    }

    return (
      <div class={['van-hairline', bem([direction, { [status]: status }])]}>
        <div class={bem('title')} style={titleStyle}>
          {this.slots()}
        </div>
        <div class={bem('circle-container')}>{Circle()}</div>
        <div class={bem('line')} />
      </div>
    );
  }
});
