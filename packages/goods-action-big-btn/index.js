import { use } from '../utils';
import Button from '../button';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps } from '../mixins/router';

const [sfc, bem] = use('goods-action-big-btn');

function GoodsActionBigBtn(h, props, slots, ctx) {
  const onClick = event => {
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

export default sfc(GoodsActionBigBtn);
