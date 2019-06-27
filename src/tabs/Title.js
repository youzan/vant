import { createNamespace } from '../utils';

const bem = createNamespace('tab')[1];

export default {
  props: {
    type: String,
    color: String,
    title: String,
    active: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },

  computed: {
    style() {
      const style = {};
      const { color, active } = this;
      const isCard = this.type === 'card';

      // card theme color
      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (active) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      const titleColor = active ? this.activeColor : this.inactiveColor;
      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = `${88 / this.swipeThreshold}%`;
      }

      return style;
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
    },

    renderTitle(el) {
      const { title } = this.$refs;
      title.innerHTML = '';
      title.appendChild(el);
    }
  },

  render(h) {
    return (
      <div
        role="tab"
        aria-selected={this.active}
        class={bem({
          active: this.active,
          disabled: this.disabled,
          complete: !this.ellipsis
        })}
        style={this.style}
        onClick={this.onClick}
      >
        <span ref="title" class={{ 'van-ellipsis': this.ellipsis }}>
          {this.title}
        </span>
      </div>
    );
  }
};
