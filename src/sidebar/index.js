import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('sidebar');

export default createComponent({
  mixins: [ParentMixin('vanSidebar')],

  model: {
    prop: 'activeKey'
  },

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  render() {
    return <div class={[bem(), BORDER_TOP_BOTTOM]}>{this.slots()}</div>;
  }
});
