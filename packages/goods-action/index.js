import { use } from '../utils';
import { inherit } from '../utils/functional';

const [sfc, bem] = use('goods-action');

function GoodsAction(h, props, slots, ctx) {
  return (
    <div class={bem()} {...inherit(ctx, true)}>
      {slots.default && slots.default()}
    </div>
  );
}

export default sfc(GoodsAction);
