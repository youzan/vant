import { ref, reactive, computed } from 'vue';

// Utils
import { isHidden } from '../utils/dom/style';
import { unitToPx } from '../utils/format/unit';
import { createNamespace } from '../utils';
import { getScrollTop, getElementTop } from '../utils/dom/scroll';

// Composition
import { useEventListener } from '@vant/use';
import { useScroller } from '../composition/use-scroller';
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
    const rootRef = ref();
    const scroller = useScroller(rootRef);

    const state = reactive({
      fixed: false,
      height: 0,
      transform: 0,
    });

    const offsetTop = computed(() => unitToPx(props.offsetTop));

    const style = computed(() => {
      if (!state.fixed) {
        return;
      }

      const top = offsetTop.value ? `${offsetTop.value}px` : null;
      const transform = state.transform
        ? `translate3d(0, ${state.transform}px, 0)`
        : null;

      return {
        top,
        zIndex: props.zIndex,
        transform,
      };
    });

    const emitScrollEvent = (scrollTop) => {
      emit('scroll', {
        scrollTop,
        isFixed: state.fixed,
      });
    };

    const onScroll = () => {
      if (isHidden(rootRef.value)) {
        return;
      }

      state.height = rootRef.value.offsetHeight;

      const { container } = props;
      const scrollTop = getScrollTop(window);
      const topToPageTop = getElementTop(rootRef.value);

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

    useEventListener({
      type: 'scroll',
      target: scroller,
      listener: onScroll,
    });

    useVisibilityChange(rootRef, onScroll);

    return () => {
      const { fixed, height } = state;
      const rootStyle = {
        height: fixed ? `${height}px` : null,
      };

      return (
        <div ref={rootRef} style={rootStyle}>
          <div class={bem({ fixed })} style={style.value}>
            {slots.default?.()}
          </div>
        </div>
      );
    };
  },
});
