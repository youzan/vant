import { use } from '../../utils';
import { inherit } from '../../utils/functional';

const [sfc, bem] = use('sku-row');

function SkuRow(h, props, slots, ctx) {
  return (
    <div class={bem()} {...inherit(ctx)}>
      <div class={bem('title')}>{props.skuRow.k}：</div>
      {slots.default && slots.default()}
    </div>
  );
}

SkuRow.props = {
  skuRow: Object
};

export default sfc(SkuRow);
