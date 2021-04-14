import {
  ref,
  watch,
  nextTick,
  PropType,
  CSSProperties,
  defineComponent,
} from 'vue';

// Utils
import { createNamespace, extend, unknownProp } from '../utils';
import { TABS_KEY, TabsProvide } from '../tabs/Tabs';

// Composables
import { useParent } from '@vant/use';
import { routeProps } from '../composables/use-route';

// Components
import { SwipeItem } from '../swipe-item';

const [name, bem] = createNamespace('tab');

export default defineComponent({
  name,

  props: extend({}, routeProps, {
    dot: Boolean,
    name: [Number, String],
    badge: [Number, String],
    title: String,
    disabled: Boolean,
    titleClass: unknownProp,
    titleStyle: [String, Object] as PropType<string | CSSProperties>,
  }),

  setup(props, { slots }) {
    const inited = ref(false);
    const { parent, index } = useParent<TabsProvide>(TABS_KEY);

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

    const isActive = () => {
      const active = getName() === parent.currentName.value;

      if (active && !inited.value) {
        init();
      }

      return active;
    };

    watch(
      () => props.title,
      () => {
        parent.setLine();
        parent.scrollIntoView();
      }
    );

    return () => {
      const { animated, swipeable, scrollspy, lazyRender } = parent.props;

      if (!slots.default && !animated) {
        return;
      }

      const active = isActive();
      const show = scrollspy || active;

      if (animated || swipeable) {
        return (
          <SwipeItem
            role="tabpanel"
            aria-hidden={!active}
            class={bem('pane-wrapper', { inactive: !active })}
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
