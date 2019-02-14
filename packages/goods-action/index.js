import { use } from '../utils';

const [sfc, bem] = use('goods-action');

function GoodsAction(h, props, slots, ctx) {
  return (
    <div class={bem()} {...ctx.data}>
      {slots.default && slots.default()}
    </div>
  );
}

export default sfc(GoodsAction);
