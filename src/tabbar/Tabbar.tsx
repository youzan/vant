import {
  ref,
  PropType,
  InjectionKey,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  truthProp,
  Interceptor,
  getZIndexStyle,
  createNamespace,
  callInterceptor,
  BORDER_TOP_BOTTOM,
} from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';

const [name, bem] = createNamespace('tabbar');

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

export const TABBAR_KEY: InjectionKey<TabbarProvide> = Symbol(name);

export default defineComponent({
  name,

  props,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const { linkChildren } = useChildren(TABBAR_KEY);
    const renderPlaceholder = usePlaceholder(root, bem);

    // enable safe-area-inset-bottom by default when fixed
    const enableSafeArea = () => props.safeAreaInsetBottom ?? props.fixed;

    const renderTabbar = () => {
      const { fixed, zIndex, border } = props;
      return (
        <div
          ref={root}
          style={getZIndexStyle(zIndex)}
          class={[
            bem({ fixed }),
            {
              [BORDER_TOP_BOTTOM]: border,
              'van-safe-area-bottom': enableSafeArea(),
            },
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
