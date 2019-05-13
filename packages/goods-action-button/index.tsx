import { use } from '../utils';
import Button, { ButtonType, ButtonEvents } from '../button';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps, RouteProps } from '../utils/router';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type GoodsActionButtonProps = RouteProps & {
  text?: string;
  type?: ButtonType;
  primary?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const [sfc, bem] = use('goods-action-button');

function GoodsActionButton(
  h: CreateElement,
  props: GoodsActionButtonProps,
  slots: DefaultSlots,
  ctx: RenderContext<GoodsActionButtonProps>
) {
  function onClick(event: Event) {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  }

  return (
    <Button
      square
      class={bem()}
      size="large"
      type={props.type}
      loading={props.loading}
      disabled={props.disabled}
      onClick={onClick}
      {...inherit(ctx)}
    >
      {slots.default ? slots.default() : props.text}
    </Button>
  );
}

GoodsActionButton.props = {
  ...routeProps,
  type: String,
  text: String,
  loading: Boolean,
  disabled: Boolean
};

export default sfc<GoodsActionButtonProps, ButtonEvents>(GoodsActionButton);
