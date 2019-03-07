import { use } from '../utils';

const [sfc, bem] = use('badge-group');

export default sfc({
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
    return <div class={[bem(), 'van-hairline--top-bottom']}>{this.slots()}</div>;
  }
});
