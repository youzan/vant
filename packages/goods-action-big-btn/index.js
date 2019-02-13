import { use } from '../utils';
import Button from '../button';
import { route, routeProps } from '../mixins/router-link';

const [sfc, bem] = use('goods-action-big-btn');

export default sfc({
  props: {
    ...routeProps,
    text: String,
    primary: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },

  render(h) {
    return (
      <Button
        square
        class={bem()}
        size="large"
        loading={this.loading}
        disabled={this.disabled}
        type={this.primary ? 'danger' : 'warning'}
        onClick={this.onClick}
      >
        {this.slots() || this.text}
      </Button>
    );
  }
});
