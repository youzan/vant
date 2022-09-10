import {
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';
import { extend, createNamespace } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar/ActionBar';

// Composables
import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useRoute, routeProps } from '../composables/use-route';

// Components
import { Button, ButtonType } from '../button';

const [name, bem] = createNamespace('action-bar-button');

export const actionBarButtonProps = extend({}, routeProps, {
  type: String as PropType<ButtonType>,
  text: String,
  icon: String,
  color: String,
  loading: Boolean,
  disabled: Boolean,
});

export type ActionBarButtonProps = ExtractPropTypes<
  typeof actionBarButtonProps
>;

export default defineComponent({
  name,

  props: actionBarButtonProps,

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
