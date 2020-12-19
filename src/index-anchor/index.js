import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { BORDER_BOTTOM } from '../utils/constant';
import { getScrollTop, getRootScrollTop } from '../utils/dom/scroll';

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
      rect: { top: 0, height: 0 },
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
    const rect = this.$el.getBoundingClientRect();
    this.rect.height = rect.height;
  },

  methods: {
    scrollIntoView() {
      this.$el.scrollIntoView();
    },

    getRect(scroller, scrollerRect) {
      const el = this.$el;
      const elRect = el.getBoundingClientRect();
      this.rect.height = elRect.height;

      if (scroller === window || scroller === document.body) {
        this.rect.top = elRect.top + getRootScrollTop();
      } else {
        this.rect.top = elRect.top + getScrollTop(scroller) - scrollerRect.top;
      }

      return this.rect;
    },
  },

  render() {
    const { sticky } = this;

    return (
      <div style={{ height: sticky ? `${this.rect.height}px` : null }}>
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
