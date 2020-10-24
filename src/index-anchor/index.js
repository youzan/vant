import { reactive, ref, computed } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import { INDEX_BAR_KEY } from '../index-bar';

// Composition
import { useParent } from '@vant/use';
import { useHeight } from '../composition/use-height';
import { useExpose } from '../composition/use-expose';

const [createComponent, bem] = createNamespace('index-anchor');

export default createComponent({
  props: {
    index: [Number, String],
  },

  setup(props, { slots }) {
    const state = reactive({
      top: 0,
      left: null,
      width: null,
      active: false,
    });

    const root = ref();
    const height = useHeight(root);
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

    useExpose({
      state,
      height,
    });

    return () => {
      const sticky = isSticky();

      return (
        <div ref={root} style={{ height: sticky ? `${height.value}px` : null }}>
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
