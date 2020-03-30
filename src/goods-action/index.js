import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('goods-action');

export default createComponent({
  mixins: [ParentMixin('vanGoodsAction')],

  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  render() {
    return (
      <div class={bem({ unfit: !this.safeAreaInsetBottom })}>
        {this.slots()}
      </div>
    );
  },
});
