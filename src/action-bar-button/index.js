import { computed } from 'vue';
import { createNamespace } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar';

// Composition
import { useParent } from '@vant/use';
import { useExpose } from '../composition/use-expose';
import { useRoute, routeProps } from '../composition/use-route';

// Components
import Button from '../button';

const [createComponent, bem] = createNamespace('action-bar-button');

export default createComponent({
  props: {
    ...routeProps,
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean,
  },

  setup(props, { slots }) {
    const route = useRoute();
    const { parent, index } = useParent(ACTION_BAR_KEY);

    const isFirst = computed(() => {
      if (parent) {
        const prev = parent.children[index.value - 1];
        return !(prev && 'isButton' in prev);
      }
    });

    const isLast = computed(() => {
      if (parent) {
        const next = parent.children[index.value + 1];
        return !(next && 'isButton' in next);
      }
    });

    useExpose({ isButton: true });

    return () => {
      const { type, icon, text, color, loading, disabled } = props;

      return (
        <Button
          class={bem([
            type,
            {
              last: isLast.value,
              first: isFirst.value,
            },
          ])}
          size="large"
          type={type}
          icon={icon}
          color={color}
          loading={loading}
          disabled={disabled}
          onClick={route}
        >
          {slots.default ? slots.default() : text}
        </Button>
      );
    };
  },
});
