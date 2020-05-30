// Utils
import { createNamespace, isObject, isDef } from '../utils';
import { route, routeProps } from '../utils/router';

// Mixins
import { ChildrenMixin } from '../mixins/relation';

// Components
import Icon from '../icon';
import Info from '../info';

const [createComponent, bem] = createNamespace('tabbar-item');

export default createComponent({
  mixins: [ChildrenMixin('vanTabbar')],

  props: {
    ...routeProps,
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String],
    badge: [Number, String],
    iconPrefix: String,
  },

  data() {
    return {
      active: false,
    };
  },

  computed: {
    routeActive() {
      const { to, $route } = this;
      if (to && $route) {
        const config = isObject(to) ? to : { path: to };
        const pathMatched = config.path === $route.path;
        const nameMatched = isDef(config.name) && config.name === $route.name;

        return pathMatched || nameMatched;
      }
    },
  },

  methods: {
    onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      route(this.$router, this);
    },

    genIcon(active) {
      const slot = this.slots('icon', { active });

      if (slot) {
        return slot;
      }

      if (this.icon) {
        return <Icon name={this.icon} classPrefix={this.iconPrefix} />;
      }
    },
  },

  render() {
    const active = this.parent.route ? this.routeActive : this.active;
    const color = this.parent[active ? 'activeColor' : 'inactiveColor'];

    return (
      <div class={bem({ active })} style={{ color }} onClick={this.onClick}>
        <div class={bem('icon')}>
          {this.genIcon(active)}
          <Info
            dot={this.dot}
            info={isDef(this.badge) ? this.badge : this.info}
          />
        </div>
        <div class={bem('text')}>{this.slots('default', { active })}</div>
      </div>
    );
  },
});
