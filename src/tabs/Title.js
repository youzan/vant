import { createNamespace, isDef } from '../utils';
import Badge from '../badge';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  props: {
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: [Number, String],
    isActive: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    renderTitle: Function,
    inactiveColor: String,
    swipeThreshold: [Number, String],
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
    genText() {
      const Text = (
        <span class={bem('text', { ellipsis: !this.scrollable })}>
          {this.renderTitle ? this.renderTitle() : this.title}
        </span>
      );

      if (this.dot || (isDef(this.badge) && this.badge !== '')) {
        return (
          <span class={bem('text-wrapper')}>
            {Text}
            {<Badge dot={this.dot} badge={this.badge} />}
          </span>
        );
      }

      return Text;
    },
  },

  render() {
    return (
      <div
        role="tab"
        class={[
          bem({
            active: this.isActive,
            disabled: this.disabled,
          }),
        ]}
        style={this.style}
        aria-selected={this.isActive}
      >
        {this.genText()}
      </div>
    );
  },
});
