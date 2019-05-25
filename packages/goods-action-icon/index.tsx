import { use } from '../utils';
import Icon, { IconEvents } from '../icon';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps, RouteProps } from '../utils/router';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type GoodsActionIconProps = RouteProps & {
  icon: string;
  text?: string;
  info?: string | number;
  iconClass?: any;
};

const [sfc, bem] = use('goods-action-icon');

function GoodsActionIcon(
  h: CreateElement,
  props: GoodsActionIconProps,
  slots: DefaultSlots,
  ctx: RenderContext<GoodsActionIconProps>
) {
  function onClick(event: Event) {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  }

  return (
    <div
      role="button"
      tabindex="0"
      class={[bem(), 'van-hairline']}
      onClick={onClick}
      {...inherit(ctx)}
    >
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

GoodsActionIcon.props = {
  ...routeProps,
  text: String,
  icon: String,
  info: [String, Number],
  iconClass: null as any
};

export default sfc<GoodsActionIconProps, IconEvents>(GoodsActionIcon);
