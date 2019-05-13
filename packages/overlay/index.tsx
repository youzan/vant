import { use } from '../utils';
import { inherit } from '../utils/functional';
import { preventDefault } from '../utils/event';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type OverlayProps = {
  zIndex?: number;
  className?: any;
  visible?: boolean;
  customStyle?: object;
};

export type OverlayEvents = {
  click(event: Event): void;
};

const [sfc, bem] = use('overlay');

function preventTouchMove(event: TouchEvent) {
  preventDefault(event, true);
}

function Overlay(
  h: CreateElement,
  props: OverlayProps,
  slots: DefaultSlots,
  ctx: RenderContext<OverlayProps>
) {
  const style = {
    zIndex: props.zIndex,
    ...props.customStyle
  };

  return (
    <transition name="van-fade">
      <div
        vShow={props.visible}
        style={style}
        class={[bem(), props.className]}
        onTouchmove={preventTouchMove}
        {...inherit(ctx, true)}
      />
    </transition>
  );
}

Overlay.props = {
  zIndex: Number,
  className: null as any,
  visible: Boolean,
  customStyle: Object
};

export default sfc<OverlayProps, OverlayEvents>(Overlay);
