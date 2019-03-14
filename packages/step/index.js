import { use } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('step');

export default sfc({
  beforeCreate() {
    this.$parent.steps.push(this);
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
    const { status } = this;
    const { activeIcon, activeColor, direction } = this.$parent;
    const titleStyle = status === 'process' && { color: activeColor };

    return (
      <div class={['van-hairline', bem([direction, { [status]: status }])]}>
        <div class={bem('title')} style={titleStyle}>
          {this.slots()}
        </div>
        <div class={bem('circle-container')}>
          {status !== 'process' ? (
            <i class={bem('circle')} />
          ) : (
            <Icon name={activeIcon} style={{ color: activeColor }} />
          )}
        </div>
        <div class={bem('line')} />
      </div>
    );
  }
});
