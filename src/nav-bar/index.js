// Utils
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('nav-bar');

export default createComponent({
  props: {
    title: String,
    fixed: Boolean,
    zIndex: [Number, String],
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    placeholder: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      height: null,
    };
  },

  mounted() {
    if (this.placeholder && this.fixed) {
      this.height = this.$refs.navBar.getBoundingClientRect().height;
    }
  },

  methods: {
    genLeft() {
      const leftSlot = this.slots('left');

      if (leftSlot) {
        return leftSlot;
      }

      return [
        this.leftArrow && <Icon class={bem('arrow')} name="arrow-left" />,
        this.leftText && <span class={bem('text')}>{this.leftText}</span>,
      ];
    },

    genRight() {
      const rightSlot = this.slots('right');

      if (rightSlot) {
        return rightSlot;
      }

      if (this.rightText) {
        return <span class={bem('text')}>{this.rightText}</span>;
      }
    },

    genNavBar() {
      return (
        <div
          ref="navBar"
          style={{ zIndex: this.zIndex }}
          class={[bem({ fixed: this.fixed }), { [BORDER_BOTTOM]: this.border }]}
        >
          <div class={bem('left')} onClick={this.onClickLeft}>
            {this.genLeft()}
          </div>
          <div class={[bem('title'), 'van-ellipsis']}>
            {this.slots('title') || this.title}
          </div>
          <div class={bem('right')} onClick={this.onClickRight}>
            {this.genRight()}
          </div>
        </div>
      );
    },

    onClickLeft(event) {
      this.$emit('click-left', event);
    },

    onClickRight(event) {
      this.$emit('click-right', event);
    },
  },

  render() {
    if (this.placeholder && this.fixed) {
      return (
        <div class={bem('placeholder')} style={{ height: `${this.height}px` }}>
          {this.genNavBar()}
        </div>
      );
    }

    return this.genNavBar();
  },
});
