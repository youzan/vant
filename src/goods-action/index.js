import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('goods-action');

export default createComponent({
  mixins: [ParentMixin('vanGoodsAction')],

  props: {
    safeAreaInsetBottom: Boolean,
  },

  render() {
    return (
      <div class={bem({ 'safe-area-inset-bottom': this.safeAreaInsetBottom })}>
        {this.slots()}
      </div>
    );
  },
});
