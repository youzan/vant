import { use } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('nav-bar');

export default sfc({
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  render(h) {
    return (
      <div
        class={[bem({ fixed: this.fixed }), { 'van-hairline--bottom': this.border }]}
        style={{ zIndex: this.zIndex }}
      >
        <div
          class={bem('left')}
          onClick={() => {
            this.$emit('click-left');
          }}
        >
          {this.$slots.left || [
            this.leftArrow && <Icon class={bem('arrow')} name="arrow-left" />,
            this.leftText && <span class={bem('text')}>{this.leftText}</span>
          ]}
        </div>
        <div class={[bem('title'), 'van-ellipsis']}>{this.$slots.title || this.title}</div>
        <div
          class={bem('right')}
          onClick={() => {
            this.$emit('click-right');
          }}
        >
          {this.$slots.right ||
            (this.rightText && <span class={bem('text')}>{this.rightText}</span>)}
        </div>
      </div>
    );
  }
});
