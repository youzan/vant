// Utils
import { createNamespace, isDef, noop } from '../utils';
import { inherit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type OverlayProps = {
  show?: boolean;
  zIndex?: number | string;
  duration: number | string | null;
  className?: any;
  lockScroll?: boolean;
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
    ...props.customStyle,
  };

  if (isDef(props.duration)) {
    style.animationDuration = `${props.duration}s`;
  }

  return (
    <transition name="van-fade">
      <div
        vShow={props.show}
        style={style}
        class={[bem(), props.className]}
        onTouchmove={props.lockScroll ? preventTouchMove : noop}
        {...inherit(ctx, true)}
      >
        {slots.default?.()}
      </div>
    </transition>
  );
}

Overlay.props = {
  show: Boolean,
  zIndex: [Number, String],
  duration: [Number, String],
  className: null as any,
  customStyle: Object,
  lockScroll: {
    type: Boolean,
    default: true,
  },
};

export default createComponent<OverlayProps, OverlayEvents>(Overlay);
