import { createNamespace, isDef } from '../utils';
import { inherit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type OverlayProps = {
  zIndex?: number;
  className?: any;
  visible?: boolean;
  duration: number | null;
  customStyle?: object;
};

export type OverlayEvents = {
  click(event: Event): void;
};

const [createComponent, bem] = createNamespace('overlay');

function preventTouchMove(event: TouchEvent) {
  preventDefault(event, true);
}

function Overlay(
  h: CreateElement,
  props: OverlayProps,
  slots: DefaultSlots,
  ctx: RenderContext<OverlayProps>
) {
  const style: { [key: string]: any } = {
    zIndex: props.zIndex,
    ...props.customStyle
  };

  if (isDef(props.duration)) {
    style.animationDuration = `${props.duration}s`;
  }

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
  customStyle: Object,
  duration: {
    type: Number,
    default: null
  }
};

export default createComponent<OverlayProps, OverlayEvents>(Overlay);
