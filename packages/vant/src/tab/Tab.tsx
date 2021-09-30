import {
  ref,
  watch,
  provide,
  computed,
  nextTick,
  PropType,
  CSSProperties,
  defineComponent,
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
import { routeProps } from '../composables/use-route';
import { TAB_STATUS_KEY } from '../composables/use-tab-status';

// Components
import { SwipeItem } from '../swipe-item';

const [name, bem] = createNamespace('tab');

export default defineComponent({
  name,

  props: extend({}, routeProps, {
    dot: Boolean,
    name: numericProp,
    badge: numericProp,
    title: String,
    disabled: Boolean,
    titleClass: unknownProp,
    titleStyle: [String, Object] as PropType<string | CSSProperties>,
    showZeroBadge: truthProp,
  }),

  setup(props, { slots }) {
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
      const { animated, swipeable, scrollspy, lazyRender } = parent.props;

      if (!slots.default && !animated) {
        return;
      }

      const show = scrollspy || active.value;

      if (animated || swipeable) {
        return (
          <SwipeItem
            role="tabpanel"
            aria-hidden={!active.value}
            class={bem('pane-wrapper', { inactive: !active.value })}
          >
            <div class={bem('pane')}>{slots.default?.()}</div>
          </SwipeItem>
        );
      }

      const shouldRender = inited.value || scrollspy || !lazyRender;
      const Content = shouldRender ? slots.default?.() : null;

      return (
        <div v-show={show} role="tabpanel" class={bem('pane')}>
          {Content}
        </div>
      );
    };
  },
});
