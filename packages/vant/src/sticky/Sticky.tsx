import {
  ref,
  watch,
  computed,
  PropType,
  reactive,
  CSSProperties,
  defineComponent,
} from 'vue';

// Utils
import {
  extend,
  isHidden,
  unitToPx,
  numericProp,
  getScrollTop,
  getZIndexStyle,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Composables
import { useRect, useEventListener, useScrollParent } from '@vant/use';
import { useVisibilityChange } from '../composables/use-visibility-change';

const [name, bem] = createNamespace('sticky');

export type StickyPosition = 'top' | 'bottom';

export default defineComponent({
  name,

  props: {
    zIndex: numericProp,
    position: makeStringProp<StickyPosition>('top'),
    container: Object as PropType<Element>,
    offsetTop: makeNumericProp(0),
    offsetBottom: makeNumericProp(0),
  },

  emits: ['scroll', 'change'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const scrollParent = useScrollParent(root);
    const state = reactive({
      fixed: false,
      width: 0, // root width
      height: 0, // root height
      transform: 0,
    });

    const offset = computed(() =>
      unitToPx(props.position === 'top' ? props.offsetTop : props.offsetBottom)
    );

    const rootStyle = computed<CSSProperties | undefined>(() => {
      const { fixed, height, width } = state;
      if (fixed) {
        return {
          width: `${width}px`,
          height: `${height}px`,
        };
      }
    });

    const stickyStyle = computed<CSSProperties | undefined>(() => {
      if (!state.fixed) {
        return;
      }

      const style: CSSProperties = extend(getZIndexStyle(props.zIndex), {
        width: `${state.width}px`,
        height: `${state.height}px`,
        [props.position]: `${offset.value}px`,
      });

      if (state.transform) {
        style.transform = `translate3d(0, ${state.transform}px, 0)`;
      }

      return style;
    });

    const emitScroll = (scrollTop: number) =>
      emit('scroll', {
        scrollTop,
        isFixed: state.fixed,
      });

    const onScroll = () => {
      if (!root.value || isHidden(root)) {
        return;
      }

      const { container, position } = props;
      const rootRect = useRect(root);
      const scrollTop = getScrollTop(window);

      state.width = rootRect.width;
      state.height = rootRect.height;

      if (position === 'top') {
        // The sticky component should be kept inside the container element
        if (container) {
          const containerRect = useRect(container);
          const difference = containerRect.bottom - offset.value - state.height;
          state.fixed = offset.value > rootRect.top && containerRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = offset.value > rootRect.top;
        }
      } else {
        const { clientHeight } = document.documentElement;
        if (container) {
          const containerRect = useRect(container);
          const difference =
            clientHeight - containerRect.top - offset.value - state.height;
          state.fixed =
            clientHeight - offset.value < rootRect.bottom &&
            clientHeight > containerRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = clientHeight - offset.value < rootRect.bottom;
        }
      }

      emitScroll(scrollTop);
    };

    watch(
      () => state.fixed,
      (value) => emit('change', value)
    );

    useEventListener('scroll', onScroll, { target: scrollParent });
    useVisibilityChange(root, onScroll);

    return () => (
      <div ref={root} style={rootStyle.value}>
        <div class={bem({ fixed: state.fixed })} style={stickyStyle.value}>
          {slots.default?.()}
        </div>
      </div>
    );
  },
});
