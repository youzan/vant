import { defineComponent } from 'vue';

// Utils
import { extend, numericProp, createNamespace } from '../utils';
import { SIDEBAR_KEY } from '../sidebar/Sidebar';

// Composables
import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route';

// Components
import { Badge } from '../badge';

const [name, bem] = createNamespace('sidebar-item');

export default defineComponent({
  name,

  props: extend({}, routeProps, {
    dot: Boolean,
    title: String,
    badge: numericProp,
    disabled: Boolean,
  }),

  emits: ['click'],

  setup(props, { emit, slots }) {
    const route = useRoute();
    const { parent, index } = useParent(SIDEBAR_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[Vant] <SidebarItem> must be a child component of <Sidebar>.'
        );
      }
      return;
    }

    const onClick = () => {
      if (props.disabled) {
        return;
      }

      emit('click', index.value);
      parent.setActive(index.value);
      route();
    };

    return () => {
      const { dot, badge, title, disabled } = props;
      const selected = index.value === parent.getActive();

      return (
        <a class={bem({ select: selected, disabled })} onClick={onClick}>
          <Badge dot={dot} content={badge} class={bem('text')}>
            {slots.title ? slots.title() : title}
          </Badge>
        </a>
      );
    };
  },
});
