import { PropType, Transition, CSSProperties } from 'vue';
import { noop, isDef, preventDefault, createNamespace } from '../utils';
import { useLazyRender } from '../composition/use-lazy-render';

const [createComponent, bem] = createNamespace('overlay');

export default createComponent({
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: null,
    customStyle: Object as PropType<CSSProperties>,
    lockScroll: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const lazyRender = useLazyRender(() => props.show);

    const preventTouchMove = (event: TouchEvent) => {
      preventDefault(event, true);
    };

    const renderOverlay = lazyRender(() => {
      const style: CSSProperties = {
        zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
        ...props.customStyle,
      };

      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }

      return (
        <div
          v-show={props.show}
          style={style}
          class={[bem(), props.className]}
          onTouchmove={props.lockScroll ? preventTouchMove : noop}
        >
          {slots.default?.()}
        </div>
      );
    });

    return () => <Transition name="van-fade">{renderOverlay()}</Transition>;
  },
});
