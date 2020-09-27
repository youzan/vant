import { ref } from 'vue';

// Utils
import { createNamespace, isDef } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor';

// Composition
import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composition/use-placeholder';

const [createComponent, bem] = createNamespace('tabbar');

export const TABBAR_KEY = 'vanTabbar';

export default createComponent({
  props: {
    route: Boolean,
    zIndex: [Number, String],
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: {
      type: [Number, String],
      default: 0,
    },
    border: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: null,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const root = ref();
    const { linkChildren } = useChildren(TABBAR_KEY);
    const renderPlaceholder = usePlaceholder(root, bem);

    const isUnfit = () => {
      if (isDef(props.safeAreaInsetBottom)) {
        return !props.safeAreaInsetBottom;
      }
      // enable safe-area-inset-bottom by default when fixed
      return !props.fixed;
    };

    const renderTabbar = () => {
      const { fixed, zIndex, border } = props;
      const unfit = isUnfit();
      return (
        <div
          ref={root}
          style={{ zIndex }}
          class={[bem({ unfit, fixed }), { [BORDER_TOP_BOTTOM]: border }]}
        >
          {slots.default?.()}
        </div>
      );
    };

    const setActive = (active) => {
      if (active !== props.modelValue) {
        callInterceptor({
          interceptor: props.beforeChange,
          args: [active],
          done() {
            emit('update:modelValue', active);
            emit('change', active);
          },
        });
      }
    };

    linkChildren({ props, setActive });

    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }
      return renderTabbar();
    };
  },
});
