import {
  ref,
  defineComponent,
  type PropType,
  type InjectionKey,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  truthProp,
  numericProp,
  getZIndexStyle,
  createNamespace,
  callInterceptor,
  makeNumericProp,
  BORDER_TOP_BOTTOM,
  type Numeric,
  type Interceptor,
} from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';

const [name, bem] = createNamespace('tabbar');

export const tabbarProps = {
  route: Boolean,
  fixed: truthProp,
  border: truthProp,
  zIndex: numericProp,
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function as PropType<Interceptor>,
  inactiveColor: String,
  modelValue: makeNumericProp(0),
  safeAreaInsetBottom: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
};

export type TabbarProps = ExtractPropTypes<typeof tabbarProps>;

export type TabbarProvide = {
  props: TabbarProps;
  setActive: (active: Numeric, afterChange: () => void) => void;
};

export const TABBAR_KEY: InjectionKey<TabbarProvide> = Symbol(name);

export default defineComponent({
  name,

  props: tabbarProps,

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
          role="tablist"
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

    const setActive = (active: Numeric, afterChange: () => void) => {
      callInterceptor(props.beforeChange, {
        args: [active],
        done() {
          emit('update:modelValue', active);
          emit('change', active);
          afterChange();
        },
      });
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
