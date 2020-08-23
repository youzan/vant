import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Button from '../button';

const [createComponent, bem] = createNamespace('action-bar-button');

export default createComponent({
  mixins: [ChildrenMixin('vanActionBar')],

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
    return (vm) => {
      const { type, icon, text, color, loading, disabled } = props;

      const { parent } = vm;
      const { name } = vm.$options;
      const prev = parent && parent.children[vm.index - 1];
      const next = parent && parent.children[vm.index + 1];
      const last = !next || name !== next.$options.name;
      const first = !prev || name !== prev.$options.name;

      const onClick = () => {
        route(vm.$router, vm);
      };

      return (
        <Button
          class={bem([type, { last, first }])}
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
