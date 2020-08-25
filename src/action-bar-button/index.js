import { computed } from 'vue';
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
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
    const { parent, index } = useParent(ACTION_BAR_KEY, { isButton: true });

    const isFirst = computed(() => {
      if (parent) {
        const children = parent.children.value;
        const prev = children[index.value - 1];
        return !(prev && prev.isButton);
      }
    });

    const isLast = computed(() => {
      if (parent) {
        const children = parent.children.value;
        const next = children[index.value + 1];
        return !(next && next.isButton);
      }
    });

    return (vm) => {
      const { type, icon, text, color, loading, disabled } = props;

      const onClick = () => {
        route(vm.$router, vm);
      };

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
          onClick={onClick}
        >
          {slots.default ? slots.default() : text}
        </Button>
      );
    };
  },
});
