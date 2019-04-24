import { use } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type GoodsActionProps = {
  safeAreaInsetBottom?: boolean;
};

const [sfc, bem] = use('goods-action');

function GoodsAction(
  h: CreateElement,
  props: GoodsActionProps,
  slots: DefaultSlots,
  ctx: RenderContext
) {
  return (
    <div
      class={bem({ 'safe-area-inset-bottom': props.safeAreaInsetBottom })}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </div>
  );
}

GoodsAction.props = {
  safeAreaInsetBottom: Boolean
};

export default sfc<GoodsActionProps>(GoodsAction);
