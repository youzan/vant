import { use } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { ParentMixin } from '../mixins/relation';
import { on, off } from '../utils/event';
import {
  getScrollTop,
  getScrollEventTarget
} from '../utils/scroll';

const [sfc, bem] = use('index-bar');

export default sfc({
  mixins: [TouchMixin, ParentMixin('vanIndexBar')],

  props: {
    zIndex: {
      type: Number,
      default: 1
    },
    indexList: {
      type: Array,
      default() {
        const indexList = [];
        const charCodeOfA = 'A'.charCodeAt(0);

        for (let i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    },
    hoverIndexOffset: {
      type: Number,
      default: 0
    },
    anchorBgColorValue: {
      type: String,
      default: '248,248,248'
    }
  },

  data() {
    return {
      scroller: null,
      childrenTopList: [],
      isInTransition: false,
      currentAnchorIndex: -1,
      nextAnchorIndex: -1,
      alpha: 1
    };
  },

  computed: {
    childrenLen() {
      return this.children.length;
    },

    activeAnchorSlot() {
      return this.currentAnchorIndex > -1 ? this.children[this.currentAnchorIndex].defaultSlot : '';
    },

    activeAnchorVisible() {
      return !this.isInTransition && this.currentAnchorIndex > -1;
    }
  },

  beforeDestroy() {
    off(this.scroller, 'scroll', this.onScroll);
  },

  methods: {
    onClick(event) {
      const { id } = event.target.dataset;

      this.scrollToElement(this.children[id]);
    },

    onTouchStart(event) {
      this.touchStart(event);
    },

    onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        /* istanbul ignore else */
        if (event.cancelable) {
          event.preventDefault();
        }

        const { clientX, clientY } = event.touches[0];
        const target = document.elementFromPoint(clientX, clientY);

        if (target) {
          const { id } = target.dataset;

          if (this.currentTouchIndex !== id) {
            this.currentTouchIndex = id;
            this.scrollToElement(this.children[id]);
          }
        }
      }
    },

    scrollToElement(child) {
      child.scrollIntoView();
      this.$emit('select', child.index);
    },

    onTouchEnd() {
      this.active = null;
    },

    getTop() {
      this.scroller = getScrollEventTarget(this.$el);
      return this.getOffsetTop(this.$el) - this.getOffsetTop(this.scroller);
    },

    getOffsetTop(element) {
      let top = 0;
      if (element === window || element === document) {
        return 0;
      }
      while (element) {
        top += element.offsetTop;
        element = element.offsetParent;
      }
      return top;
    },

    onScroll() {
      const scrollTop = getScrollTop(this.scroller);
      if (scrollTop < 0) {
        this.currentAnchorIndex = -1;
        return;
      }

      const nextAnchorIndex = this.childrenTopList.findIndex(top => top > scrollTop);
      const currentAnchorIndex = nextAnchorIndex === -1 ? this.childrenLen - 1 : nextAnchorIndex - 1;
      const currentAnchorHeight = this.children[currentAnchorIndex === -1 ? 0 : currentAnchorIndex].offsetHeight;
      let isInTransition = false;
      let alpha = 1;
      let diffTop;

      if (nextAnchorIndex > -1) {
        diffTop = this.childrenTopList[nextAnchorIndex] - scrollTop;
        if (diffTop >= 0 && diffTop <= currentAnchorHeight) {
          alpha = diffTop / currentAnchorHeight;
          isInTransition = true;
        }
      }

      this.isInTransition = isInTransition;
      this.alpha = alpha;
      this.currentAnchorIndex = currentAnchorIndex;
      this.nextAnchorIndex = nextAnchorIndex;
    },

    bindScrollEvent() {
      on(this.scroller, 'scroll', this.onScroll);
    }
  },

  render(h) {
    return (
      <div
        class={bem()}
        style={{ zIndex: this.zIndex }}
      >
        <div
          class={bem('sidebar')}
          style={{ zIndex: this.zIndex }}
          onClick={this.onClick}
          onTouchstart={this.onTouchStart}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
          onTouchcancel={this.onTouchEnd}
        >
          {this.indexList.map((index, id) => (
            <span class={bem('index', { highlight: id === this.currentAnchorIndex })} data-id={id} data-index={index}>
              {index}
            </span>
          ))}
        </div>

        <div
          vShow={this.activeAnchorVisible}
          class={[bem('active'), 'van-hairline--bottom']}
          style={{ top: `${this.hoverIndexOffset}px`, zIndex: this.zIndex }}
        >
          {this.activeAnchorSlot}
        </div>
        {this.slots('default')}
      </div>
    );
  }
});
