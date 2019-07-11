import { createNamespace } from '../utils';
import Icon, { IconEvents } from '../icon';
import { emit, inherit } from '../utils/functional';
import { functionalRoute, routeProps, RouteProps } from '../utils/router';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

export type GoodsActionIconProps = RouteProps & {
  icon: string;
  text?: string;
  info?: string | number;
  iconClass?: any;
};

export type GoodsActionIconSlots = DefaultSlots & {
  icon?: ScopedSlot;
};

const [createComponent, bem] = createNamespace('goods-action-icon');

function GoodsActionIcon(
  h: CreateElement,
  props: GoodsActionIconProps,
  slots: GoodsActionIconSlots,
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
      class={bem()}
      onClick={onClick}
      {...inherit(ctx)}
    >
      {slots.icon ? (
        <div class={bem('icon')}>{slots.icon()}</div>
      ) : (
        <Icon
          class={[bem('icon'), props.iconClass]}
          tag="div"
          info={props.info}
          name={props.icon}
        />
      )}
      {slots.default ? slots.default() : props.text}
    </div>
  );
}

GoodsActionIcon.props = {
  ...routeProps,
  text: String,
  icon: String,
  info: [Number, String],
  iconClass: null as any
};

export default createComponent<GoodsActionIconProps, IconEvents>(GoodsActionIcon);
