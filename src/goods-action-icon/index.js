import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('goods-action-icon');

export default createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],

  props: {
    ...routeProps,
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },

  render() {
    return (
      <div role="button" tabindex="0" class={bem()} onClick={this.onClick}>
        {this.slots('icon') ? (
          <div class={bem('icon')}>{this.slots('icon')}</div>
        ) : (
          <Icon
            class={[bem('icon'), this.iconClass]}
            tag="div"
            info={this.info}
            name={this.icon}
          />
        )}
        {this.slots() || this.text}
      </div>
    );
  }
});
