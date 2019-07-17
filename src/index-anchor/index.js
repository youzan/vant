import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('index-anchor');

export default createComponent({
  mixins: [ChildrenMixin('vanIndexBar', { indexKey: 'childrenIndex' })],

  props: {
    index: [Number, String]
  },

  data() {
    return {
      top: 0,
      active: false
    };
  },

  computed: {
    sticky() {
      return this.active && this.parent.sticky;
    },

    anchorStyle() {
      if (this.sticky) {
        return {
          transform: `translate3d(0, ${this.top}px, 0)`,
          color: this.parent.highlightColor,
          zIndex: `${this.parent.zIndex}`
        };
      }
    }
  },

  mounted() {
    this.height = this.$el.offsetHeight;
  },

  methods: {
    scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },

  render(h) {
    const { sticky } = this;

    return (
      <div style={{ height: sticky ? `${this.height}px` : null }}>
        <div
          style={this.anchorStyle}
          class={[bem({ sticky }), { 'van-hairline--bottom': sticky }]}
        >
          {this.slots('default') || this.index}
        </div>
      </div>
    );
  }
});
