import { ref, reactive, computed, CSSProperties } from 'vue';

// Utils
import {
  isHidden,
  unitToPx,
  getScrollTop,
  getElementTop,
  createNamespace,
} from '../utils';

// Composition
import { useScrollParent, useEventListener } from '@vant/use';
import { useVisibilityChange } from '../composition/use-visibility-change';

const [createComponent, bem] = createNamespace('sticky');

export default createComponent({
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
  },

  emits: ['scroll'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const scrollParent = useScrollParent(root);

    const state = reactive({
      fixed: false,
      height: 0,
      transform: 0,
    });

    const offsetTop = computed(() => unitToPx(props.offsetTop));

    const style = computed<CSSProperties | undefined>(() => {
      if (!state.fixed) {
        return;
      }

      const top = offsetTop.value ? `${offsetTop.value}px` : undefined;
      const transform = state.transform
        ? `translate3d(0, ${state.transform}px, 0)`
        : undefined;

      return {
        top,
        zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
        transform,
      };
    });

    const emitScrollEvent = (scrollTop: number) => {
      emit('scroll', {
        scrollTop,
        isFixed: state.fixed,
      });
    };

    const onScroll = () => {
      if (!root.value || isHidden(root)) {
        return;
      }

      state.height = root.value.offsetHeight;

      const { container } = props;
      const scrollTop = getScrollTop(window);
      const topToPageTop = getElementTop(root.value);

      // The sticky component should be kept inside the container element
      if (container) {
        const bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop.value + state.height > bottomToPageTop) {
          const distanceToBottom = state.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < state.height) {
            state.fixed = true;
            state.transform = -(distanceToBottom + offsetTop.value);
          } else {
            state.fixed = false;
          }

          emitScrollEvent(scrollTop);
          return;
        }
      }

      if (scrollTop + offsetTop.value > topToPageTop) {
        state.fixed = true;
        state.transform = 0;
      } else {
        state.fixed = false;
      }

      emitScrollEvent(scrollTop);
    };

    useEventListener('scroll', onScroll, { target: scrollParent });
    useVisibilityChange(root, onScroll);

    return () => {
      const { fixed, height } = state;
      const rootStyle: CSSProperties = {
        height: fixed ? `${height}px` : undefined,
      };

      return (
        <div ref={root} style={rootStyle}>
          <div class={bem({ fixed })} style={style.value}>
            {slots.default?.()}
          </div>
        </div>
      );
    };
  },
});
