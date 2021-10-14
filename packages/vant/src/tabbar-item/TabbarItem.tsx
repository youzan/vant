import { computed, getCurrentInstance, defineComponent } from 'vue';

// Utils
import { createNamespace, extend, isObject, numericProp } from '../utils';
import { TABBAR_KEY } from '../tabbar/Tabbar';

// Composables
import { useParent } from '@vant/use';
import { routeProps, useRoute } from '../composables/use-route';

// Components
import { Icon } from '../icon';
import { Badge } from '../badge';

const [name, bem] = createNamespace('tabbar-item');

export default defineComponent({
  name,

  props: extend({}, routeProps, {
    dot: Boolean,
    icon: String,
    name: numericProp,
    badge: numericProp,
    iconPrefix: String,
  }),

  emits: ['click'],

  setup(props, { emit, slots }) {
    const route = useRoute();
    const vm = getCurrentInstance()!.proxy!;
    const { parent, index } = useParent(TABBAR_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[Vant] <TabbarItem> must be a child component of <Tabbar>.'
        );
      }
      return;
    }

    const active = computed(() => {
      const { route, modelValue } = parent.props;

      if (route && '$route' in vm) {
        const { $route } = vm;
        const { to } = props;
        const config = isObject(to) ? to : { path: to };
        const pathMatched = 'path' in config && config.path === $route.path;
        const nameMatched = 'name' in config && config.name === $route.name;

        return pathMatched || nameMatched;
      }

      return (props.name || index.value) === modelValue;
    });

    const onClick = (event: MouseEvent) => {
      parent.setActive(props.name ?? index.value);
      emit('click', event);
      route();
    };

    const renderIcon = () => {
      if (slots.icon) {
        return slots.icon({ active: active.value });
      }
      if (props.icon) {
        return <Icon name={props.icon} classPrefix={props.iconPrefix} />;
      }
    };

    return () => {
      const { dot, badge } = props;
      const { activeColor, inactiveColor } = parent.props;
      const color = active.value ? activeColor : inactiveColor;

      return (
        <div
          class={bem({ active: active.value })}
          style={{ color }}
          onClick={onClick}
        >
          <Badge
            v-slots={{ default: renderIcon }}
            dot={dot}
            content={badge}
            class={bem('icon')}
          />
          <div class={bem('text')}>
            {slots.default?.({ active: active.value })}
          </div>
        </div>
      );
    };
  },
});
