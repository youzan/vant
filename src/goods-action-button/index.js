import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Button from '../button';

const [createComponent, bem] = createNamespace('goods-action-button');

export default createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],

  props: {
    ...routeProps,
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean,
  },

  computed: {
    isFirst() {
      const prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },

    isLast() {
      const next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },
  },

  render() {
    return (
      <Button
        class={bem([
          {
            first: this.isFirst,
            last: this.isLast,
          },
          this.type,
        ])}
        size="large"
        type={this.type}
        icon={this.icon}
        color={this.color}
        loading={this.loading}
        disabled={this.disabled}
        onClick={this.onClick}
      >
        {this.slots() || this.text}
      </Button>
    );
  },
});
