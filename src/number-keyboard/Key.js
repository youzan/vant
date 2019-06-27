import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('key');

export default createComponent({
  props: {
    type: String,
    theme: Array,
    text: [String, Number]
  },

  data() {
    return {
      active: false
    };
  },

  computed: {
    className() {
      const classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    }
  },

  methods: {
    onFocus() {
      this.active = true;
    },

    onBlur(event) {
      this.active = false;
    },

    onClick() {
      this.$emit('press', this.text, this.type);
    }
  },

  render(h) {
    const { onBlur } = this;
    return (
      <i
        role="button"
        tabindex="0"
        class={['van-hairline', this.className]}
        onClick={this.onClick}
        onTouchstart={this.onFocus}
        onTouchmove={onBlur}
        onTouchend={onBlur}
        onTouchcancel={onBlur}
      >
        {this.slots('default') || this.text}
      </i>
    );
  }
});
