import { ref } from 'vue';
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { useParent } from '../api/use-relation';
import { ACTION_BAR_KEY } from '../action-bar';
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
    useParent(ACTION_BAR_KEY, ref());

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
