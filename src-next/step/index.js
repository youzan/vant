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
      if (this.index === +this.parent.active) {
        return 'process';
      }
    },

    active() {
      return this.status === 'process';
    },

    lineStyle() {
      if (this.status === 'finish' && this.parent.activeColor) {
        return {
          background: this.parent.activeColor,
        };
      }
    },
  },

  methods: {
    genCircle() {
      const { activeIcon, activeColor, inactiveIcon } = this.parent;

      if (this.active) {
        return this.$slots['active-icon'] ? (
          this.$slots['active-icon']()
        ) : (
          <Icon
            class={bem('icon', 'active')}
            name={activeIcon}
            color={activeColor}
          />
        );
      }

      if (inactiveIcon || this.$slots['inactive-icon']) {
        return this.$slots['inactive-icon'] ? (
          this.$slots['inactive-icon']()
        ) : (
          <Icon class={bem('icon')} name={inactiveIcon} />
        );
      }

      return <i class={bem('circle')} style={this.lineStyle} />;
    },

    onClickStep() {
      this.parent.$emit('click-step', this.index);
    },
  },

  render() {
    const { status, active } = this;
    const { activeColor, direction } = this.parent;

    const titleStyle = active && { color: activeColor };

    return (
      <div class={[BORDER, bem([direction, { [status]: status }])]}>
        <div
          class={bem('title', { active })}
          style={titleStyle}
          onClick={this.onClickStep}
        >
          {this.$slots.default?.()}
        </div>
        <div class={bem('circle-container')} onClick={this.onClickStep}>
          {this.genCircle()}
        </div>
        <div class={bem('line')} style={this.lineStyle} />
      </div>
    );
  },
});
