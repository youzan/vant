// Utils
import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';

export type SkuHeaderItemProps = {};

const [createComponent, bem] = createNamespace('sku-header-item');

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

export default createComponent<SkuHeaderItemProps>(SkuHeader);
