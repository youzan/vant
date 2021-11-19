import { defineComponent, ExtractPropTypes } from 'vue';

// Utils
import { extend, numericProp, createNamespace } from '../utils';
import { SIDEBAR_KEY } from '../sidebar/Sidebar';

// Composables
import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route';

// Components
import { Badge } from '../badge';

const [name, bem] = createNamespace('sidebar-item');

const sidebarItemProps = extend({}, routeProps, {
  dot: Boolean,
  title: String,
  badge: numericProp,
  disabled: Boolean,
});

export type SidebarItemProps = ExtractPropTypes<typeof sidebarItemProps>;

export default defineComponent({
  name,

  props: sidebarItemProps,

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
        <div
          role="tab"
          class={bem({ select: selected, disabled })}
          tabindex={disabled ? undefined : 0}
          aria-selected={selected}
          onClick={onClick}
        >
          <Badge dot={dot} content={badge} class={bem('text')}>
            {slots.title ? slots.title() : title}
          </Badge>
        </div>
      );
    };
  },
});
