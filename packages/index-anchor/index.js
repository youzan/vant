import { use } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('index-anchor');

export default sfc({
  mixins: [ChildrenMixin('vanIndexBar', { indexKey: 'childrenIndex' })],

  props: {
    index: [String, Number],
    bgColorValue: String
  },

  data() {
    return {
      id: 0,
      offsetHeight: 0,
      isReady: false
    };
  },

  computed: {
    isCurrentAnchor() {
      return this.id === this.parent.currentAnchorIndex;
    },

    isNextAnchor() {
      return this.id === this.parent.nextAnchorIndex;
    },

    defaultSlot() {
      return this.slots('default') || this.index;
    }
  },

  created() {
    this.isReady = true;
    if (!this.parent) {
      return;
    }

    const { children, childrenLen, indexList } = this.parent;

    if (indexList && childrenLen === indexList.length && !children.some(child => !child.isReady)) {
      this.$nextTick(() => {
        const parentTop = this.parent.getTop();
        const childrenTopList = [];

        children.forEach((child, index) => {
          const { offsetHeight, offsetTop } = child.$el;
          child.id = index;
          child.offsetHeight = offsetHeight;
          childrenTopList.push(parentTop + offsetTop);
        });

        this.parent.childrenTopList = childrenTopList;
        this.parent.onScroll();
        this.parent.bindScrollEvent();
      });
    }
  },

  methods: {
    scrollIntoView() {
      this.$el.scrollIntoView();
    },

    content(slot, alpha, border) {
      return (
        <div
          class={[
            bem('content'),
            { 'van-hairline--bottom': border }
          ]}
          style={{ backgroundColor: `rgba(${this.bgColorValue || this.parent.anchorBgColorValue},${alpha})` }}
        >
          {slot}
        </div>
      );
    }
  },

  render(h) {
    let prevAnchor = '';

    if (this.id > 0) {
      prevAnchor = (
        <div
          vShow={this.isNextAnchor && this.parent.isInTransition}
          class={bem('prev')}
        >
          {this.content(this.parent.children[this.id - 1].defaultSlot, this.isNextAnchor ? 1 - this.parent.alpha : 0, true)}
        </div>
      );
    }

    return (
      <div class={bem({ highlight: this.isNextAnchor && this.parent.isInTransition })}>
        {prevAnchor}
        {this.content(this.defaultSlot, this.isNextAnchor ? this.parent.alpha : 1)}
      </div>
    );
  }
});
