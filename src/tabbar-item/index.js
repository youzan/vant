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
    // @deprecated
    info: [Number, String],
    badge: [Number, String],
    iconPrefix: String,
  },

  data() {
    return {
      nameMatched: false,
    };
  },

  computed: {
    routeMatched() {
      const { to, $route } = this;
      if (to && $route) {
        const config = isObject(to) ? to : { path: to };
        const pathMatched = config.path === $route.path;
        const nameMatched = isDef(config.name) && config.name === $route.name;

        return pathMatched || nameMatched;
      }
    },
    active() {
      return this.parent.route ? this.routeMatched : this.nameMatched;
    },
  },

  methods: {
    onClick(event) {
      if (!this.active) {
        this.parent.triggerChange(this.name || this.index, () => {
          route(this.$router, this);
        });
      }
      this.$emit('click', event);
    },

    genIcon() {
      const slot = this.slots('icon', { active: this.active });

      if (slot) {
        return slot;
      }

      if (this.icon) {
        return <Icon name={this.icon} classPrefix={this.iconPrefix} />;
      }
    },
  },

  render() {
    const { active } = this;
    const color = this.parent[active ? 'activeColor' : 'inactiveColor'];

    if (process.env.NODE_ENV === 'development' && this.info) {
      console.warn(
        '[Vant] TabbarItem: "info" prop is deprecated, use "badge" prop instead.'
      );
    }

    return (
      <div class={bem({ active })} style={{ color }} onClick={this.onClick}>
        <div class={bem('icon')}>
          {this.genIcon()}
          <Info dot={this.dot} info={this.badge ?? this.info} />
        </div>
        <div class={bem('text')}>{this.slots('default', { active })}</div>
      </div>
    );
  },
});
