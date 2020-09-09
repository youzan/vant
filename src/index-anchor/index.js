import { reactive, ref, computed } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import { INDEX_BAR_KEY } from '../index-bar';

// Composition
import { useHeight } from '../composition/use-rect';
import { useParent } from '../composition/use-relation';

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

    const rootRef = ref();
    const height = useHeight(rootRef);

    const { parent } = useParent(INDEX_BAR_KEY, {
      props,
      state,
      height,
      rootRef,
    });

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

    return () => {
      const sticky = isSticky();

      return (
        <div
          ref={rootRef}
          style={{ height: sticky ? `${height.value}px` : null }}
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
