import { createNamespace, suffixPx } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('grid');

export default createComponent({
  mixins: [ParentMixin('vanGrid')],

  props: {
    gutter: Number,
    square: Boolean,
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    style() {
      const { gutter } = this;

      if (gutter) {
        return {
          paddingLeft: suffixPx(gutter)
        };
      }
    }
  },

  render(h) {
    return (
      <div
        style={this.style}
        class={[bem(), { 'van-hairline--top': this.border && !this.gutter }]}
      >
        {this.slots()}
      </div>
    );
  }
});
