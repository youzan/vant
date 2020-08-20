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

  emits: ['click'],

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },

    genIcon() {
      if (this.$slots.icon) {
        return (
          <div class={bem('icon')}>
            {this.$slots.icon()}
            <Badge dot={this.dot} badge={this.badge} />
          </div>
        );
      }

      return (
        <Icon
          class={[bem('icon'), this.iconClass]}
          tag="div"
          dot={this.dot}
          name={this.icon}
          badge={this.badge}
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
