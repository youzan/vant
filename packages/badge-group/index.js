import create from '../utils/create';

export default create({
  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  provide() {
    return {
      vanBadgeGroup: this
    };
  },

  data() {
    return {
      badges: []
    };
  },

  render(h) {
    return (
      <div class={['van-hairline--top-bottom', this.b()]}>
        {this.$slots.default}
      </div>
    );
  }
});
