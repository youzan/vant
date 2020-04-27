import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('row');

export default createComponent({
  mixins: [ParentMixin('vanRow')],

  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },

  render() {
    const { align, justify } = this;
    const flex = this.type === 'flex';

    return (
      <this.tag
        class={bem({
          flex,
          [`align-${align}`]: flex && align,
          [`justify-${justify}`]: flex && justify,
        })}
        onClick={this.onClick}
      >
        {this.slots()}
      </this.tag>
    );
  },
});
