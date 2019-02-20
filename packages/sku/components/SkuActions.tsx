import { use } from '../../utils';
import { inherit } from '../../utils/functional';
import Button from '../../button';

// Types
import Vue, { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/use/sfc';

export type SkuActionsProps = {
  buyText?: string;
  skuEventBus: Vue;
  showAddCartBtn?: boolean;
};

const [sfc, bem] = use('sku-actions');

function SkuActions(
  h: CreateElement,
  props: SkuActionsProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuActionsProps>
) {
  const emit = (name: string) => () => {
    props.skuEventBus.$emit(name);
  };

  return (
    <div class={bem()} {...inherit(ctx)}>
      {props.showAddCartBtn && (
        <Button bottomAction text="加入购物车" onClick={emit('sku:addCart')} />
      )}
      <Button
        type="primary"
        bottomAction
        text={props.buyText || '立即购买'}
        onClick={emit('sku:buy')}
      />
    </div>
  );
}

SkuActions.props = {
  buyText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};

export default sfc<SkuActionsProps>(SkuActions);
