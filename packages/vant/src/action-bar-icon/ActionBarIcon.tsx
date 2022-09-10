import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';
import { extend, createNamespace, unknownProp, numericProp } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar/ActionBar';

// Composables
import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route';

// Components
import { Icon } from '../icon';
import { Badge, type BadgeProps } from '../badge';

const [name, bem] = createNamespace('action-bar-icon');

export const actionBarIconProps = extend({}, routeProps, {
  dot: Boolean,
  text: String,
  icon: String,
  color: String,
  badge: numericProp,
  iconClass: unknownProp,
  badgeProps: Object as PropType<Partial<BadgeProps>>,
  iconPrefix: String,
});

export type ActionBarIconProps = ExtractPropTypes<typeof actionBarIconProps>;

export default defineComponent({
  name,

  props: actionBarIconProps,

  setup(props, { slots }) {
    const route = useRoute();

    useParent(ACTION_BAR_KEY);

    const renderIcon = () => {
      const { dot, badge, icon, color, iconClass, badgeProps, iconPrefix } =
        props;

      if (slots.icon) {
        return (
          <Badge
            v-slots={{ default: slots.icon }}
            dot={dot}
            class={bem('icon')}
            content={badge}
            {...badgeProps}
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
          badgeProps={badgeProps}
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
