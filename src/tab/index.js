import { ref, watch, nextTick } from 'vue';
import { createNamespace } from '../utils';
import { TABS_KEY } from '../tabs';

// Composition
import { useParent } from '@vant/use';
import { routeProps } from '../composition/use-route';

// Components
import SwipeItem from '../swipe-item';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  props: {
    ...routeProps,
    dot: Boolean,
    name: [Number, String],
    badge: [Number, String],
    title: String,
    titleStyle: null,
    disabled: Boolean,
  },

  setup(props, { slots }) {
    const inited = ref(false);
    const { parent, index } = useParent(TABS_KEY);

    if (!parent) {
      throw new Error('[Vant] Tabs: <van-tab> must be used inside <van-tabs>');
    }

    const getName = () => props.name ?? index.value;

    const init = () => {
      inited.value = true;

      if (parent.props.lazyRender) {
        nextTick(() => {
          parent.emit('rendered', getName(), props.title);
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
