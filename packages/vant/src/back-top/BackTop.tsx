import {
  ref,
  watch,
  computed,
  Teleport,
  nextTick,
  onMounted,
  defineComponent,
  type PropType,
  type TeleportProps,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  extend,
  addUnit,
  inBrowser,
  numericProp,
  getScrollTop,
  getZIndexStyle,
  createNamespace,
  makeNumericProp,
} from '../utils';
import { throttle } from '../lazyload/vue-lazyload/util';

// Composables
import { useEventListener, getScrollParent } from '@vant/use';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('back-top');

export const backTopProps = {
  right: numericProp,
  bottom: numericProp,
  zIndex: numericProp,
  target: [String, Object] as PropType<TeleportProps['to']>,
  offset: makeNumericProp(200),
  immediate: Boolean,
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
};

export type BackTopProps = ExtractPropTypes<typeof backTopProps>;

export default defineComponent({
  name,

  inheritAttrs: false,

  props: backTopProps,

  emits: ['click'],

  setup(props, { emit, slots, attrs }) {
    const show = ref(false);
    const root = ref<HTMLElement>();
    const scrollParent = ref<Window | Element>();

    const style = computed(() =>
      extend(getZIndexStyle(props.zIndex), {
        right: addUnit(props.right),
        bottom: addUnit(props.bottom),
      })
    );

    const onClick = (event: MouseEvent) => {
      emit('click', event);
      scrollParent.value?.scrollTo({
        top: 0,
        behavior: props.immediate ? 'auto' : 'smooth',
      });
    };

    const scroll = () => {
      show.value = scrollParent.value
        ? getScrollTop(scrollParent.value) >= props.offset
        : false;
    };

    const getTarget = () => {
      const { target } = props;

      if (typeof target === 'string') {
        const el = document.querySelector(target);

        if (el) {
          return el;
        }

        if (process.env.NODE_ENV !== 'production') {
          console.error(
            `[Vant] BackTop: target element "${target}" was not found, the BackTop component will not be rendered.`
          );
        }
      } else {
        return target as Element;
      }
    };

    const updateTarget = () => {
      if (inBrowser) {
        nextTick(() => {
          scrollParent.value = props.target
            ? getTarget()
            : getScrollParent(root.value!);
          scroll();
        });
      }
    };

    useEventListener('scroll', throttle(scroll, 100), { target: scrollParent });

    onMounted(updateTarget);
    watch(() => props.target, updateTarget);

    return () => {
      const Content = (
        <div
          ref={root}
          class={bem({ active: show.value })}
          style={style.value}
          onClick={onClick}
          {...attrs}
        >
          {slots.default ? (
            slots.default()
          ) : (
            <Icon name="back-top" class={bem('icon')} />
          )}
        </div>
      );

      if (props.teleport) {
        return <Teleport to={props.teleport}>{Content}</Teleport>;
      }
      return Content;
    };
  },
});
