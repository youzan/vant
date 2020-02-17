import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('sidebar');

export default createComponent({
  mixins: [ParentMixin('vanSidebar')],

  model: {
    prop: 'activeKey',
  },

  props: {
    activeKey: {
      type: [Number, String],
      default: 0,
    },
  },

  render() {
    return <div class={bem()}>{this.slots()}</div>;
  },
});
