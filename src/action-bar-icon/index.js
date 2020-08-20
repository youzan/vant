import { createNamespace, isDef } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Info from '../info';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('action-bar-icon');

export default createComponent({
  mixins: [ChildrenMixin('vanActionBar')],

  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    info: [Number, String],
    badge: [Number, String],
    iconClass: null,
  },

  emits: ['click'],

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },

    genIcon() {
      const info = isDef(this.badge) ? this.badge : this.info;

      if (this.$slots.icon) {
        return (
          <div class={bem('icon')}>
            {this.$slots.icon()}
            <Info dot={this.dot} info={info} />
          </div>
        );
      }

      return (
        <Icon
          class={[bem('icon'), this.iconClass]}
          tag="div"
          dot={this.dot}
          info={info}
          name={this.icon}
          color={this.color}
        />
      );
    },
  },

  render() {
    return (
      <div role="button" tabindex="0" class={bem()} onClick={this.onClick}>
        {this.genIcon()}
        {this.$slots.default ? this.$slots.default() : this.text}
      </div>
    );
  },
});
