import { computed, CSSProperties, PropType, reactive, ref } from 'vue';

// Utils
import { createNamespace, getScrollTop, isHidden, unitToPx } from '../utils';

// Composition
import { useEventListener, useScrollParent } from '@vant/use';
import { useVisibilityChange } from '../composables/use-visibility-change';

const [createComponent, bem] = createNamespace('sticky');

export type Position = 'top' | 'bottom';

export default createComponent({
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
    offsetBottom: {
      type: [Number, String],
      default: 0,
    },
    position: {
      type: String as PropType<Position>,
      default: 'top',
    },
  },

  emits: ['scroll'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const scrollParent = useScrollParent(root);

    const state = reactive({
      fixed: false,
      height: 0, // root 高度
      width: 0, // root 宽度
      clientHeight: 0, // documentElement clientHeight
      transform: 0,
    });

    const offsetTop = computed(() => unitToPx(props.offsetTop));
    const offsetBottom = computed(() => unitToPx(props.offsetBottom));

    const style = computed<CSSProperties | undefined>(() => {
      if (!state.fixed) {
        return;
      }

      const top = offsetTop.value ? `${offsetTop.value}px` : 0;
      const bottom = offsetBottom.value ? `${offsetBottom.value}px` : 0;
      const transform = state.transform
        ? `translate3d(0, ${state.transform}px, 0)`
        : undefined;

      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === 'top' ? top : undefined,
        bottom: props.position === 'bottom' ? bottom : undefined,
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

      const { container } = props;
      const rootRect = root.value.getBoundingClientRect();
      const containerRect = container?.getBoundingClientRect();
      state.height = rootRect.height;
      state.width = rootRect.width;
      state.clientHeight = document.documentElement.clientHeight;

      const scrollTop = getScrollTop(window);

      // The sticky component should be kept inside the container element

      if (props.position === 'top') {
        if (container) {
          const difference =
            containerRect.bottom - offsetTop.value - state.height;
          state.fixed =
            offsetTop.value > rootRect.top && containerRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = offsetTop.value > rootRect.top;
        }
      } else if (props.position === 'bottom') {
        if (container) {
          const difference =
            state.clientHeight -
            containerRect.top -
            offsetBottom.value -
            state.height;
          state.fixed =
            state.clientHeight - offsetBottom.value < rootRect.bottom &&
            state.clientHeight > containerRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed =
            state.clientHeight - offsetBottom.value < rootRect.bottom;
        }
      }
      emitScrollEvent(scrollTop);
    };

    useEventListener('scroll', onScroll, { target: scrollParent });
    useVisibilityChange(root, onScroll);

    return () => {
      const { fixed, height, width } = state;
      const rootStyle: CSSProperties = {
        height: fixed ? `${height}px` : undefined,
        width: fixed ? `${width}px` : undefined,
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
