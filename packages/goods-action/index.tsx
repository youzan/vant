import { use } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultProps, DefaultSlots } from '../utils/use/sfc';

const [sfc, bem] = use('goods-action');

function GoodsAction(
  h: CreateElement,
  props: DefaultProps,
  slots: DefaultSlots,
  ctx: RenderContext
) {
  return (
    <div class={bem()} {...inherit(ctx, true)}>
      {slots.default && slots.default()}
    </div>
  );
}

export default sfc(GoodsAction);
