import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('row');

export default createComponent({
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
    const margin = `-${Number(this.gutter) / 2}px`;
    const style = this.gutter
      ? { marginLeft: margin, marginRight: margin }
      : {};

    return (
      <this.tag
        style={style}
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
