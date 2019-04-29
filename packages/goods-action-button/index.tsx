import { use } from '../utils';
import Button, { ButtonEvents } from '../button';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps, RouteProps } from '../utils/router';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type GoodsActionButtonProps = RouteProps & {
  text?: string;
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

GoodsActionButton.props = {
  ...routeProps,
  text: String,
  primary: Boolean,
  loading: Boolean,
  disabled: Boolean
};

export default sfc<GoodsActionButtonProps, ButtonEvents>(GoodsActionButton);
