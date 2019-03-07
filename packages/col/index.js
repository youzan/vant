import { use } from '../utils';

const [sfc, bem] = use('col');

export default sfc({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0;
    },

    style() {
      const padding = `${this.gutter / 2}px`;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  },

  render(h) {
    const { span, offset } = this;
    return (
      <this.tag class={bem({ [span]: span, [`offset-${offset}`]: offset })} style={this.style}>
        {this.slots()}
      </this.tag>
    );
  }
});
