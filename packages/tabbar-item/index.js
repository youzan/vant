import { use } from '../utils';
import Icon from '../icon';
import Info from '../info';
import { route, routeProps } from '../utils/router';

const [sfc, bem] = use('tabbar-item');

export default sfc({
  props: {
    ...routeProps,
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data() {
    return {
      active: false
    };
  },

  beforeCreate() {
    this.$parent.items.push(this);
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },

  methods: {
    onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      route(this.$router, this);
    }
  },

  render(h) {
    const { icon, slots, active } = this;
    const style = active ? { color: this.$parent.activeColor } : null;

    return (
      <div class={bem({ active })} style={style} onClick={this.onClick}>
        <div class={bem('icon', { dot: this.dot })}>
          {slots('icon', { active }) || (icon && <Icon name={icon} />)}
          <Info info={this.info} />
        </div>
        <div class={bem('text')}>{slots('default', { active })}</div>
      </div>
    );
  }
});
