import { use } from '../utils';
import Icon from '../icon';
import { route, routeProps } from '../mixins/router-link';

const [sfc, bem] = use('goods-action-mini-btn');

export default sfc({
  props: {
    ...routeProps,
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },

  render(h) {
    return (
      <div class={[bem(), 'van-hairline']} onClick={this.onClick}>
        <Icon class={[bem('icon'), this.iconClass]} info={this.info} name={this.icon} />
        {this.slots() || this.text}
      </div>
    );
  }
});
