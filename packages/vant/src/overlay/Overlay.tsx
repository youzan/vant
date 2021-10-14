import { PropType, Transition, CSSProperties, defineComponent } from 'vue';
import {
  noop,
  isDef,
  extend,
  truthProp,
  numericProp,
  unknownProp,
  preventDefault,
  createNamespace,
  getZIndexStyle,
} from '../utils';
import { useLazyRender } from '../composables/use-lazy-render';

const [name, bem] = createNamespace('overlay');

export default defineComponent({
  name,

  props: {
    show: Boolean,
    zIndex: numericProp,
    duration: numericProp,
    className: unknownProp,
    lockScroll: truthProp,
    customStyle: Object as PropType<CSSProperties>,
  },

  setup(props, { slots }) {
    const lazyRender = useLazyRender(() => props.show);

    const preventTouchMove = (event: TouchEvent) => {
      preventDefault(event, true);
    };

    const renderOverlay = lazyRender(() => {
      const style: CSSProperties = extend(
        getZIndexStyle(props.zIndex),
        props.customStyle
      );

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

    return () => (
      <Transition v-slots={{ default: renderOverlay }} name="van-fade" appear />
    );
  },
});
