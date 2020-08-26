import { createNamespace } from '../utils';
import { ACTION_BAR_KEY } from '../action-bar';

// Composition
import { useParent } from '../composition/use-relation';
import { useRoute, routeProps } from '../composition/use-route';

// Components
import Icon from '../icon';
import Badge from '../badge';

const [createComponent, bem] = createNamespace('action-bar-icon');

export default createComponent({
  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: [Number, String],
    iconClass: null,
  },

  setup(props, { slots }) {
    const route = useRoute();
    useParent(ACTION_BAR_KEY);

    const renderIcon = () => {
      const { dot, badge, icon, color, iconClass } = props;

      if (slots.icon) {
        return (
          <div class={bem('icon')}>
            {slots.icon()}
            <Badge dot={dot} badge={badge} />
          </div>
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
        />
      );
    };

    return () => (
      <div role="button" class={bem()} tabindex="0" onClick={route}>
        {renderIcon()}
        {slots.default ? slots.default() : props.text}
      </div>
    );
  },
});
