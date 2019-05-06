import { use } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [sfc, bem] = use('sidebar');

export default sfc({
  mixins: [ParentMixin('vanSidebar')],

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  render(h) {
    return <div class={[bem(), 'van-hairline--top-bottom']}>{this.slots()}</div>;
  }
});
