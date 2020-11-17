import { ref, reactive, computed, onMounted } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import { INDEX_BAR_KEY } from '../index-bar';
import { getScrollTop, getRootScrollTop } from '../utils/dom/scroll';

// Composition
import { useRect, useParent } from '@vant/use';
import { useHeight } from '../composables/use-height';
import { useExpose } from '../composables/use-expose';

const [createComponent, bem] = createNamespace('index-anchor');

export default createComponent({
  props: {
    index: [Number, String],
  },

  setup(props, { slots }) {
    const state = reactive({
      top: 0,
      left: null,
      rect: { top: 0, height: 0 },
      width: null,
      active: false,
    });

    const root = ref();
    const { parent } = useParent(INDEX_BAR_KEY);

    const isSticky = () => state.active && parent.props.sticky;

    const anchorStyle = computed(() => {
      const { zIndex, highlightColor } = parent.props;

      if (isSticky()) {
        return {
          zIndex: `${zIndex}`,
          left: state.left ? `${state.left}px` : null,
          width: state.width ? `${state.width}px` : null,
          transform: state.top ? `translate3d(0, ${state.top}px, 0)` : null,
          color: highlightColor,
        };
      }
    });

    const getRect = (scrollParent, scrollParentRect) => {
      const rootRect = useRect(root);
      state.rect.height = rootRect.height;

      if (scrollParent === window || scrollParent === document.body) {
        state.rect.top = rootRect.top + getRootScrollTop();
      } else {
        state.rect.top =
          rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top;
      }

      return state.rect;
    };

    onMounted(() => {
      state.rect.height = useHeight(root);
    });

    useExpose({
      state,
      getRect,
    });

    return () => {
      const sticky = isSticky();

      return (
        <div
          ref={root}
          style={{ height: sticky ? `${state.rect.height}px` : null }}
        >
          <div
            style={anchorStyle.value}
            class={[bem({ sticky }), { [BORDER_BOTTOM]: sticky }]}
          >
            {slots.default ? slots.default() : props.index}
          </div>
        </div>
      );
    };
  },
});
