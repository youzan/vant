import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('step');

export default createComponent({
  mixins: [ChildrenMixin('vanSteps')],

  computed: {
    status() {
      if (this.index < this.parent.active) {
        return 'finish';
      }
      if (this.index === this.parent.active) {
        return 'process';
      }
    }
  },

  methods: {
    genCircle() {
      const { activeIcon, activeColor, inactiveIcon } = this.parent;

      if (this.status === 'process') {
        return (
          this.slots('active-icon') || (
            <Icon class={bem('icon')} name={activeIcon} color={activeColor} />
          )
        );
      }

      const inactiveIconSlot = this.slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || <Icon class={bem('icon')} name={inactiveIcon} />;
      }

      return <i class={bem('circle')} />;
    }
  },

  render() {
    const { status } = this;
    const { activeColor, direction } = this.parent;
    const titleStyle = status === 'process' && { color: activeColor };

    return (
      <div class={[BORDER, bem([direction, { [status]: status }])]}>
        <div class={bem('title')} style={titleStyle}>
          {this.slots()}
        </div>
        <div class={bem('circle-container')}>{this.genCircle()}</div>
        <div class={bem('line')} />
      </div>
    );
  }
});
