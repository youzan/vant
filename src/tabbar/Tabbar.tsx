import { ref, PropType, defineComponent, ExtractPropTypes } from 'vue';

// Utils
import { truthProp, createNamespace, getZIndexStyle } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor, Interceptor } from '../utils/interceptor';

// Composables
import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';

const [name, bem] = createNamespace('tabbar');

export const TABBAR_KEY = Symbol(name);

const props = {
  route: Boolean,
  fixed: truthProp,
  border: truthProp,
  zIndex: [Number, String],
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function as PropType<Interceptor>,
  inactiveColor: String,
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  safeAreaInsetBottom: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
};

export type TabbarProvide = {
  props: ExtractPropTypes<typeof props>;
  setActive: (active: number | string) => void;
};

export default defineComponent({
  name,

  props,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const { linkChildren } = useChildren(TABBAR_KEY);
    const renderPlaceholder = usePlaceholder(root, bem);

    // enable safe-area-inset-bottom by default when fixed
    const isUnfit = () => !(props.safeAreaInsetBottom ?? props.fixed);

    const renderTabbar = () => {
      const { fixed, zIndex, border } = props;
      return (
        <div
          ref={root}
          style={getZIndexStyle(zIndex)}
          class={[
            bem({ unfit: isUnfit(), fixed }),
            { [BORDER_TOP_BOTTOM]: border },
          ]}
        >
          {slots.default?.()}
        </div>
      );
    };

    const setActive = (active: number | string) => {
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
