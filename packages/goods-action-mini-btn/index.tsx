import { use } from '../utils';
import Icon, { IconEvents } from '../icon';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps, RouteProps } from '../utils/router';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type GoodsActionMiniBtnProps = RouteProps & {
  icon: string;
  text?: string;
  info?: string | number;
  iconClass?: any;
};

const [sfc, bem] = use('goods-action-mini-btn');

function GoodsActionMiniBtn(
  h: CreateElement,
  props: GoodsActionMiniBtnProps,
  slots: DefaultSlots,
  ctx: RenderContext<GoodsActionMiniBtnProps>
) {
  const onClick = (event: Event) => {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  };

  return (
    <div class={[bem(), 'van-hairline']} onClick={onClick} {...inherit(ctx)}>
      <Icon
        class={[bem('icon'), props.iconClass]}
        tag="div"
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
  iconClass: null as any
};

export default sfc<GoodsActionMiniBtnProps, IconEvents>(GoodsActionMiniBtn);
