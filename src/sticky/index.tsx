import { computed, CSSProperties, PropType, reactive, ref } from 'vue';

// Utils
import { createNamespace, getScrollTop, isHidden, unitToPx } from '../utils';

// Composables
import { useRect, useEventListener, useScrollParent } from '@vant/use';
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
      width: 0, // root width
      height: 0, // root height
      transform: 0,
    });

    const offsetTop = computed(() => unitToPx(props.offsetTop));
    const offsetBottom = computed(() => unitToPx(props.offsetBottom));

    const style = computed<CSSProperties | undefined>(() => {
      if (!state.fixed) {
        return;
      }

      const style: CSSProperties = {
        width: `${state.width}px`,
        height: `${state.height}px`,
      };

      if (state.transform) {
        style.transform = `translate3d(0, ${state.transform}px, 0)`;
      }

      if (props.zIndex !== undefined) {
        style.zIndex = +props.zIndex;
      }

      if (props.position === 'top') {
        style.top = offsetTop.value ? `${offsetTop.value}px` : 0;
      } else {
        style.bottom = offsetBottom.value ? `${offsetBottom.value}px` : 0;
      }

      return style;
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
      const rootRect = useRect(root);
      const containerRect = container?.getBoundingClientRect();

      state.width = rootRect.width;
      state.height = rootRect.height;

      const scrollTop = getScrollTop(window);

      if (props.position === 'top') {
        // The sticky component should be kept inside the container element
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
        const { clientHeight } = document.documentElement;
        if (container) {
          const difference =
            clientHeight -
            containerRect.top -
            offsetBottom.value -
            state.height;
          state.fixed =
            clientHeight - offsetBottom.value < rootRect.bottom &&
            clientHeight > containerRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = clientHeight - offsetBottom.value < rootRect.bottom;
        }
      }
      emitScrollEvent(scrollTop);
    };

    useEventListener('scroll', onScroll, { target: scrollParent });
    useVisibilityChange(root, onScroll);

    return () => {
      const { fixed, height, width } = state;
      const rootStyle: CSSProperties = {
        width: fixed ? `${width}px` : undefined,
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
