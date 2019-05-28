import { use } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('index-anchor');

export default sfc({
  mixins: [ChildrenMixin('vanIndexBar', { indexKey: 'childrenIndex' })],

  props: {
    index: [String, Number],
    // 背景颜色值
    bgColorValue: String
  },

  data() {
    return {
      offsetHeight: 0,
      isReady: false
    };
  },

  computed: {
    // 当前是否处于下一个索引
    isNextAnchor() {
      return this.childrenIndex === this.parent.nextAnchorIndex;
    },

    defaultSlot() {
      return this.slots('default') || this.index;
    }
  },

  created() {
    // 组件就绪
    this.isReady = true;

    if (!this.parent) {
      return;
    }

    const { children, childrenLen, indexList } = this.parent;

    // 等待所有index-anchor初始化完成后计算
    if (indexList && childrenLen === indexList.length && !children.some(child => !child.isReady)) {
      this.$nextTick(() => {
        const parentTop = this.parent.getTop();
        const childrenTopList = [];

        // 缓存所有index-anchor的高度以及距离index-bar顶部的距离
        children.forEach((child, index) => {
          const { offsetHeight, offsetTop } = child.$el;
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
          // 控制背景色透明度
          style={{ backgroundColor: `rgba(${this.bgColorValue || this.parent.anchorBgColorValue},${alpha})` }}
        >
          {slot}
        </div>
      );
    }
  },

  render(h) {
    let prevAnchor = '';

    if (this.childrenIndex > 0) {
      // 可能是插槽，所以复用
      prevAnchor = (
        <div
          vShow={this.isNextAnchor}
          class={bem('prev', { fixed: !this.parent.isInTransition })}
          style={{ top: `${this.parent.hoverIndexOffset}px`, zIndex: this.parent.zIndex }}
        >
          {this.content(this.parent.children[this.childrenIndex - 1].defaultSlot, this.isNextAnchor ? 1 - this.parent.alpha : 0, true)}
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
