import { use } from '../utils';
import Icon from '../icon';
import RouterLink from '../mixins/router-link';

const [sfc, bem] = use('goods-action-mini-btn');

export default sfc({
  mixins: [RouterLink],

  props: {
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  },

  render(h) {
    return (
      <div class={[bem(), 'van-hairline']} onClick={this.onClick}>
        <Icon class={[bem('icon'), this.iconClass]} info={this.info} name={this.icon} />
        {this.$slots.default || this.text}
      </div>
    );
  }
});
