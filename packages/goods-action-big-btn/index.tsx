import { use } from '../utils';
import Button, { ButtonEvents } from '../button';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps, RouteProps } from '../utils/router';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type GoodsActionBigBtnProps = RouteProps & {
  text?: string;
  primary?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const [sfc, bem] = use('goods-action-big-btn');

function GoodsActionBigBtn(
  h: CreateElement,
  props: GoodsActionBigBtnProps,
  slots: DefaultSlots,
  ctx: RenderContext<GoodsActionBigBtnProps>
) {
  const onClick = (event: Event) => {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  };

  return (
    <Button
      square
      class={bem()}
      size="large"
      loading={props.loading}
      disabled={props.disabled}
      type={props.primary ? 'danger' : 'warning'}
      onClick={onClick}
      {...inherit(ctx)}
    >
      {slots.default ? slots.default() : props.text}
    </Button>
  );
}

GoodsActionBigBtn.props = {
  ...routeProps,
  text: String,
  primary: Boolean,
  loading: Boolean,
  disabled: Boolean
};

export default sfc<GoodsActionBigBtnProps, ButtonEvents>(GoodsActionBigBtn);
