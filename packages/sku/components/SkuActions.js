import { use } from '../../utils';
import Button from '../../button';

const [sfc, bem] = use('sku-actions');

export default sfc({
  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  },

  render(h) {
    const emit = name => () => {
      this.skuEventBus.$emit(name);
    };

    return (
      <div class={bem()}>
        {this.showAddCartBtn && (
          <Button bottomAction text="加入购物车" onClick={emit('sku:addCart')} />
        )}
        <Button
          type="primary"
          bottomAction
          text={this.buyText || '立即购买'}
          onClick={emit('sku:buy')}
        />
      </div>
    );
  }
});
