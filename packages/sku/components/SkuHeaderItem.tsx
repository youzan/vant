import { use } from '../../utils';
import { inherit } from '../../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/use/sfc';

export type SkuHeaderItemProps = {};

const [sfc, bem] = use('sku-header__item');

function SkuHeader(
  h: CreateElement,
  props: SkuHeaderItemProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuHeaderItemProps>
) {
  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.default && slots.default()}
    </div>
  );
}

export default sfc<SkuHeaderItemProps>(SkuHeader);
