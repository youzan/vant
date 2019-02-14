import { use } from '../utils';
import Icon from '../icon';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps } from '../mixins/router';

const [sfc, bem] = use('goods-action-mini-btn');

function GoodsActionMiniBtn(h, props, slots, ctx) {
  const onClick = event => {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  };

  return (
    <div
      class={[bem(), 'van-hairline']}
      onClick={onClick}
      {...inherit(ctx)}
    >
      <Icon
        class={[bem('icon'), props.iconClass]}
        info={props.info}
        name={props.icon}
      />
      {slots.default ? slots.default() : props.text}
    </div>
  );
}

GoodsActionMiniBtn.props = {
  ...routeProps,
  text: String,
  icon: String,
  info: [String, Number],
  iconClass: String
};

export default sfc(GoodsActionMiniBtn);
