import { ref, computed } from 'vue';
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { useParent } from '../api/use-relation';
import { SIDEBAR_KEY } from '../sidebar';
import Badge from '../badge';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  props: {
    ...routeProps,
    dot: Boolean,
    title: String,
    badge: [Number, String],
    disabled: Boolean,
  },

  emits: ['click'],

  setup(props, { emit }) {
    const { parent, index } = useParent(SIDEBAR_KEY, ref());

    const selected = computed(() => index.value === +parent.active.value);

    return (vm) => {
      const { dot, badge, title, disabled } = props;

      const onClick = () => {
        if (disabled) {
          return;
        }

        emit('click', index.value);
        parent.emit('update:modelValue', index.value);
        parent.setIndex(index.value);
        route(vm.$router, vm);
      };

      return (
        <a class={bem({ select: selected.value, disabled })} onClick={onClick}>
          <div class={bem('text')}>
            {title}
            <Badge dot={dot} badge={badge} class={bem('badge')} />
          </div>
        </a>
      );
    };
  },
});
