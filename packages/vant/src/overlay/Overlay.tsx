import {
  ref,
  Transition,
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  isDef,
  extend,
  truthProp,
  numericProp,
  unknownProp,
  preventDefault,
  createNamespace,
  getZIndexStyle,
} from '../utils';

// Composables
import { useEventListener } from '@vant/use';
import { useLazyRender } from '../composables/use-lazy-render';

const [name, bem] = createNamespace('overlay');

export const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object as PropType<CSSProperties>,
};

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;

export default defineComponent({
  name,

  props: overlayProps,

  setup(props, { slots }) {
    const root = ref<HTMLElement>();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);

    const onTouchMove = (event: TouchEvent) => {
      if (props.lockScroll) {
        preventDefault(event, true);
      }
    };

    const renderOverlay = lazyRender(() => {
      const style: CSSProperties = extend(
        getZIndexStyle(props.zIndex),
        props.customStyle,
      );

      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }

      return (
        <div
          v-show={props.show}
          ref={root}
          style={style}
          class={[bem(), props.className]}
        >
          {slots.default?.()}
        </div>
      );
    });

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchMove, {
      target: root,
    });

    return () => (
      <Transition v-slots={{ default: renderOverlay }} name="van-fade" appear />
    );
  },
});
