import { use } from '../utils';

const [sfc, bem] = use('key');

export default sfc({
  props: {
    type: Array,
    text: [String, Number]
  },

  data() {
    return {
      active: false
    };
  },

  computed: {
    className() {
      const types = this.type.slice(0);
      this.active && types.push('active');
      return bem(types);
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
      this.$emit('press', this.text);
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
        {this.text}
      </i>
    );
  }
});
