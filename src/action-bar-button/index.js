import { computed } from 'vue';
import { createNamespace } from '../utils';
import { useRoute, routeProps } from '../utils/router';
import { useParent } from '../api/use-relation';
import { ACTION_BAR_KEY } from '../action-bar';
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
    const { parent, index } = useParent(ACTION_BAR_KEY, { isButton: true });

    const isFirst = computed(() => {
      if (parent) {
        const prev = parent.children[index.value - 1];
        return !(prev && prev.isButton);
      }
    });

    const isLast = computed(() => {
      if (parent) {
        const next = parent.children[index.value + 1];
        return !(next && next.isButton);
      }
    });

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
