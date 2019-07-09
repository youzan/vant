import { use } from '../../utils';
import { inherit } from '../../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/use/sfc';
import { SkuTreeItemData } from '../type';

export type SkuRowProps = {
  skuRow: SkuTreeItemData;
};

const [sfc, bem] = use('sku-row');

function SkuRow(
  h: CreateElement,
  props: SkuRowProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuRowProps>
) {
  return (
    <div class={[bem(), 'van-hairline--bottom']} {...inherit(ctx)}>
      <div class={bem('title')}>{props.skuRow.k}</div>
      {slots.default && slots.default()}
    </div>
  );
}

SkuRow.props = {
  skuRow: Object
};

export default sfc<SkuRowProps>(SkuRow);
