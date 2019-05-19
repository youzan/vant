import { use, isObj } from '../utils';
import Icon from '../icon';
import Info from '../info';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('tabbar-item');

export default sfc({
  mixins: [ChildrenMixin('vanTabbar')],

  props: {
    ...routeProps,
    icon: String,
    dot: Boolean,
    name: [String, Number],
    info: [String, Number]
  },

  data() {
    return {
      active: false
    };
  },

  computed: {
    routeActive() {
      const { to, $route } = this;
      if (to && $route) {
        const path = isObj(to) ? to.path : to;
        return $route.path === path;
      }
    }
  },

  methods: {
    onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      route(this.$router, this);
    }
  },

  render(h) {
    const { icon, slots } = this;
    const active = this.parent.route ? this.routeActive : this.active;
    const color = this.parent[active ? 'activeColor' : 'inactiveColor'];

    return (
      <div class={bem({ active })} style={{ color }} onClick={this.onClick}>
        <div class={bem('icon', { dot: this.dot })}>
          {slots('icon', { active }) || (icon && <Icon name={icon} />)}
          <Info info={this.info} />
        </div>
        <div class={bem('text')}>{slots('default', { active })}</div>
      </div>
    );
  }
});
