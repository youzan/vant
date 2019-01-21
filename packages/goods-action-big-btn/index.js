import { use } from '../utils';
import Button from '../button';
import RouterLink from '../mixins/router-link';

const [sfc, bem] = use('goods-action-big-btn');

export default sfc({
  mixins: [RouterLink],

  props: {
    text: String,
    primary: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      this.routerLink();
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
        {this.$slots.default || this.text}
      </Button>
    );
  }
});
