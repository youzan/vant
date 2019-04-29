import { use } from '../utils';

const [sfc, bem] = use('sidebar');

export default sfc({
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  provide() {
    return {
      vanSidebar: this
    };
  },

  data() {
    return {
      items: []
    };
  },

  render(h) {
    return <div class={[bem(), 'van-hairline--top-bottom']}>{this.slots()}</div>;
  }
});
