import { createNamespace, addUnit } from '../utils';
import { BORDER_TOP } from '../utils/constant';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('grid');

export default createComponent({
  mixins: [ParentMixin('vanGrid')],

  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    direction: String,
    clickable: Boolean,
    columnNum: {
      type: [Number, String],
      default: 4,
    },
    center: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    style() {
      const { gutter } = this;

      if (gutter) {
        return {
          paddingLeft: addUnit(gutter),
        };
      }
    },
  },

  render() {
    return (
      <div
        style={this.style}
        class={[bem(), { [BORDER_TOP]: this.border && !this.gutter }]}
      >
        {this.slots()}
      </div>
    );
  },
});
