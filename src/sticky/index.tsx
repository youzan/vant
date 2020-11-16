import { ref, reactive, computed, CSSProperties, PropType } from 'vue';

// Utils
import {
  isHidden,
  unitToPx,
  getScrollTop,
  getElementTop,
  createNamespace,
  getElementBottom,
  getScrollBottom,
} from '../utils';

// Composition
import { useScrollParent, useEventListener } from '@vant/use';
import { useVisibilityChange } from '../composition/use-visibility-change';

const [createComponent, bem] = createNamespace('sticky');

export type StickType = 'top' | 'bottom';

export default createComponent({
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
    type: {
      type: String as PropType<StickType>,
      default: 'top',
    },
    offsetBottom: {
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
    const { type } = props;
    const offsetTop = computed(() => unitToPx(props.offsetTop));
    const offsetBottom = computed(() => unitToPx(props.offsetBottom));
    const style = computed<CSSProperties | undefined>(() => {
      if (!state.fixed) {
        return;
      }

      const top = offsetTop.value ? `${offsetTop.value}px` : undefined;
      const bottom = offsetBottom.value ? `${offsetBottom.value}px` : undefined;
      const transform = state.transform
        ? `translate3d(0, ${state.transform}px, 0)`
        : undefined;

      return {
        top: type === 'top' ? top : null,
        bottom: type === 'bottom' ? bottom : null,
        zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
        transform,
      };
    });

    const emitScrollEvent = (scrollTopOrBottom: number) => {
      if (type === 'top') {
        emit('scroll', {
          scrollTop: scrollTopOrBottom,
          isFixed: state.fixed,
        });
      } else if (type === 'bottom') {
        emit('scroll', {
          scrollBottom: scrollTopOrBottom,
          isFixed: state.fixed,
        });
      }
    };

    const onScroll = () => {
      if (!root.value || isHidden(root)) {
        return;
      }

      state.height = root.value.offsetHeight;

      const { container } = props;

      // The sticky component should be kept inside the container element
      if (type === 'top') {
        const scrollTop = getScrollTop(window);
        const topToPageTop = getElementTop(root.value);
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
      } else if (type === 'bottom') {
        const scrollBottom = getScrollBottom(window);
        const bottomToPageBottom = getElementBottom(root.value);
        if (container) {
          const topToPageBottom = bottomToPageBottom + state.height;
          if (
            scrollBottom + offsetBottom.value + state.height >
            topToPageBottom
          ) {
            const distanceToTop = state.height + scrollBottom - topToPageBottom;

            if (distanceToTop < state.height) {
              state.fixed = true;
              state.transform = distanceToTop + offsetBottom.value;
            } else {
              state.fixed = false;
            }

            emitScrollEvent(scrollBottom);
            return;
          }
        }
        if (scrollBottom + offsetBottom.value > bottomToPageBottom) {
          state.fixed = true;
          state.transform = 0;
        } else {
          state.fixed = false;
        }
        emitScrollEvent(scrollBottom);
      }
    };

    useEventListener('scroll', onScroll, { target: scrollParent });
    useVisibilityChange(root, onScroll);

    return () => {
      const { fixed, height } = state;
      const rootStyle: CSSProperties = {
        height: fixed ? `${height}px` : undefined,
      };
      if (type === 'top') {
        return (
          <div ref={root} style={rootStyle}>
            <div class={bem({ fixedTop: fixed })} style={style.value}>
              {slots.default?.()}
            </div>
          </div>
        );
      }
      if (type === 'bottom') {
        return (
          <div ref={root} style={rootStyle}>
            <div class={bem({ fixedBottom: fixed })} style={style.value}>
              {slots.default?.()}
            </div>
          </div>
        );
      }
    };
  },
});
