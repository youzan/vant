import { use } from '../utils';

const [sfc, bem] = use('row');

export default sfc({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  render(h) {
    const { align, justify } = this;
    const flex = this.type === 'flex';
    const margin = `-${Number(this.gutter) / 2}px`;
    const style = this.gutter ? { marginLeft: margin, marginRight: margin } : {};

    return (
      <this.tag
        style={style}
        class={bem({
          flex,
          [`align-${align}`]: flex && align,
          [`justify-${justify}`]: flex && justify
        })}
      >
        {this.slots()}
      </this.tag>
    );
  }
});
