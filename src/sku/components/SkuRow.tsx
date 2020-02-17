// Utils
import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';
import { BORDER_BOTTOM } from '../../utils/constant';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';
import { SkuTreeItemData } from '../../../types/sku';

export type SkuRowProps = {
  skuRow: SkuTreeItemData;
};

const [createComponent, bem, t] = createNamespace('sku-row');

function SkuRow(
  h: CreateElement,
  props: SkuRowProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuRowProps>
) {
  const multipleNode = props.skuRow.is_multiple && (
    <span class={bem('title-multiple')}>（{t('multiple')}）</span>
  );
  return (
    <div class={[bem(), BORDER_BOTTOM]} {...inherit(ctx)}>
      <div class={bem('title')}>
        {props.skuRow.k}
        {multipleNode}
      </div>
      {slots.default && slots.default()}
    </div>
  );
}

SkuRow.props = {
  skuRow: Object,
};

export default createComponent<SkuRowProps>(SkuRow);
