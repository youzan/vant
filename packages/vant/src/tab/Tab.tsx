import {
  ref,
  watch,
  provide,
  computed,
  nextTick,
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  extend,
  truthProp,
  unknownProp,
  numericProp,
  createNamespace,
} from '../utils';
import { TABS_KEY } from '../tabs/Tabs';

// Composables
import { useParent } from '@vant/use';
import { useId } from '../composables/use-id';
import { useExpose } from '../composables/use-expose';
import { routeProps } from '../composables/use-route';
import { TAB_STATUS_KEY } from '../composables/use-tab-status';

// Components
import { SwipeItem } from '../swipe-item';

const [name, bem] = createNamespace('tab');

export const tabProps = extend({}, routeProps, {
  dot: Boolean,
  name: numericProp,
  badge: numericProp,
  title: String,
  disabled: Boolean,
  titleClass: unknownProp,
  titleStyle: [String, Object] as PropType<string | CSSProperties>,
  showZeroBadge: truthProp,
});

export type TabProps = ExtractPropTypes<typeof tabProps>;

export default defineComponent({
  name,

  props: tabProps,

  setup(props, { slots }) {
    const id = useId();
    const inited = ref(false);
    const { parent, index } = useParent(TABS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Tab> must be a child component of <Tabs>.');
      }
      return;
    }

    const getName = () => props.name ?? index.value;

    const init = () => {
      inited.value = true;

      if (parent.props.lazyRender) {
        nextTick(() => {
          parent.onRendered(getName(), props.title);
        });
      }
    };

    const active = computed(() => {
      const isActive = getName() === parent.currentName.value;

      if (isActive && !inited.value) {
        init();
      }

      return isActive;
    });

    watch(
      () => props.title,
      () => {
        parent.setLine();
        parent.scrollIntoView();
      }
    );

    provide(TAB_STATUS_KEY, active);

    return () => {
      const label = `${parent.id}-${index.value}`;
      const { animated, swipeable, scrollspy, lazyRender } = parent.props;

      if (!slots.default && !animated) {
        return;
      }

      const show = scrollspy || active.value;

      if (animated || swipeable) {
        return (
          <SwipeItem
            id={id}
            role="tabpanel"
            class={bem('panel-wrapper', { inactive: !active.value })}
            tabindex={active.value ? 0 : -1}
            aria-hidden={!active.value}
            aria-labelledby={label}
          >
            <div class={bem('panel')}>{slots.default?.()}</div>
          </SwipeItem>
        );
      }

      const shouldRender = inited.value || scrollspy || !lazyRender;
      const Content = shouldRender ? slots.default?.() : null;

      useExpose({ id });

      return (
        <div
          v-show={show}
          id={id}
          role="tabpanel"
          class={bem('panel')}
          tabindex={show ? 0 : -1}
          aria-labelledby={label}
        >
          {Content}
        </div>
      );
    };
  },
});
