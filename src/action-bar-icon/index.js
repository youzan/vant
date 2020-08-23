import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';
import Badge from '../badge';

const [createComponent, bem] = createNamespace('action-bar-icon');

export default createComponent({
  mixins: [ChildrenMixin('vanActionBar')],

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
    function genIcon() {
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
    }

    return (vm) => (
      <div
        role="button"
        class={bem()}
        tabindex="0"
        onClick={() => {
          route(vm.$router, vm);
        }}
      >
        {genIcon()}
        {slots.default ? slots.default() : props.text}
      </div>
    );
  },
});
