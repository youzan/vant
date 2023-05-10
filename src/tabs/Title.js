import { createNamespace, isDef } from '../utils';
import Info from '../info';
import VanEmptyCol from '../emptycol';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  components: {
    VanEmptyCol,
  },
  props: {
    dot: Boolean,
    type: String,
    badgebtn: Boolean,
    badgemax: Number,
    info: [Number, String],
    color: String,
    title: String,
    isActive: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
  },

  computed: {
    style() {
      const style = {};
      const { color, isActive } = this;
      const isCard = this.type === 'card';

      // card theme color
      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      const titleColor = isActive ? this.activeColor : this.inactiveColor;
      if (titleColor) {
        style.color = titleColor;
      }

      return style;
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },

    genText() {
      const ifDesigner = (this.$env && this.$env.VUE_APP_DESIGNER);
      const Text = (
        <span class={bem('text', { ellipsis: !this.scrollable })} vusion-slot-name-edit="title">
          {this.slots() || this.title || (ifDesigner && <van-empty-col style="width:auto"></van-empty-col>)}
        </span>
      );


      if (this.dot || (isDef(this.info) && this.info !== '')) {
        return (
          <span class={bem('text-wrapper')}>
            {Text}
            {<Info dot={this.dot} info={this.info} badgemax={this.badgemax} />}
          </span>
        );
      }

      return Text;
    },
    designerControl() {
      this.onClick();
    },
  },

  render() {
    return (
      <div
        role="tab"
        aria-selected={this.isActive}
        class={[
          bem({
            active: this.isActive,
            disabled: this.disabled,
          }),
        ]}
        style={this.style}
        onClick={this.onClick}
      >
        {this.genText()}
      </div>
    );
  },
});
