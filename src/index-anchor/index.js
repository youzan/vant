import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { BORDER_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('index-anchor');

export default createComponent({
  mixins: [ChildrenMixin('vanIndexBar', { indexKey: 'childrenIndex' })],

  props: {
    index: [Number, String],
  },

  data() {
    return {
      top: 0,
      left: null,
      width: null,
      active: false,
    };
  },

  computed: {
    sticky() {
      return this.active && this.parent.sticky;
    },

    anchorStyle() {
      if (this.sticky) {
        return {
          zIndex: `${this.parent.zIndex}`,
          left: this.left ? `${this.left}px` : null,
          width: this.width ? `${this.width}px` : null,
          transform: `translate3d(0, ${this.top}px, 0)`,
          color: this.parent.highlightColor,
        };
      }
    },
  },

  mounted() {
    this.height = this.$el.offsetHeight;
  },

  methods: {
    scrollIntoView() {
      this.$el.scrollIntoView();
    },
  },

  render() {
    const { sticky } = this;

    return (
      <div style={{ height: sticky ? `${this.height}px` : null }}>
        <div
          style={this.anchorStyle}
          class={[bem({ sticky }), { [BORDER_BOTTOM]: sticky }]}
        >
          {this.slots('default') || this.index}
        </div>
      </div>
    );
  },
});
