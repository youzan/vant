import { use } from '../utils';
import { preventDefault } from '../utils/event';

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
      this.$emit('press', this.text);
    },

    onBlur(event) {
      preventDefault(event, true);
      this.active = false;
    }
  },

  render(h) {
    const { onBlur } = this;
    return (
      <i
        class={['van-hairline', this.className]}
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
