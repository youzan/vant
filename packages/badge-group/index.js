import createSfc from '../utils/create';

export default createSfc({
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
    return <div class="van-hairline--top-bottom van-badge-group">{this.$slots.default}</div>;
  }
});
