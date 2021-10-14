import { defineComponent } from 'vue';
import { extend, createNamespace, unknownProp, numericProp } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar/ActionBar';

// Composables
import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route';

// Components
import { Icon } from '../icon';
import { Badge } from '../badge';

const [name, bem] = createNamespace('action-bar-icon');

export default defineComponent({
  name,

  props: extend({}, routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: numericProp,
    iconClass: unknownProp,
    iconPrefix: String,
  }),

  setup(props, { slots }) {
    const route = useRoute();

    useParent(ACTION_BAR_KEY);

    const renderIcon = () => {
      const { dot, badge, icon, color, iconClass, iconPrefix } = props;

      if (slots.icon) {
        return (
          <Badge
            v-slots={{ default: slots.icon }}
            dot={dot}
            content={badge}
            class={bem('icon')}
          />
        );
      }

      return (
        <Icon
          tag="div"
          dot={dot}
          name={icon}
          badge={badge}
          color={color}
          class={[bem('icon'), iconClass]}
          classPrefix={iconPrefix}
        />
      );
    };

    return () => (
      <div role="button" class={bem()} tabindex={0} onClick={route}>
        {renderIcon()}
        {slots.default ? slots.default() : props.text}
      </div>
    );
  },
});
