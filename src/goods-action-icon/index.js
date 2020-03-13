import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Info from '../info';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('goods-action-icon');

export default createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],

  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    info: [Number, String],
    iconClass: null,
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },

    genIcon() {
      const slot = this.slots('icon');

      if (slot) {
        return (
          <div class={bem('icon')}>
            {slot}
            <Info dot={this.dot} info={this.info} />
          </div>
        );
      }

      return (
        <Icon
          class={[bem('icon'), this.iconClass]}
          tag="div"
          dot={this.dot}
          info={this.info}
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
        {this.slots() || this.text}
      </div>
    );
  },
});
