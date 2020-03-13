// Utils
import { createNamespace, isDef } from '../utils';
import { isHidden } from '../utils/dom/style';
import { preventDefault } from '../utils/dom/event';
import {
  getScroller,
  getScrollTop,
  getElementTop,
  getRootScrollTop,
  setRootScrollTop,
} from '../utils/dom/scroll';

// Mixins
import { TouchMixin } from '../mixins/touch';
import { ParentMixin } from '../mixins/relation';
import { BindEventMixin } from '../mixins/bind-event';

function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
}

const [createComponent, bem] = createNamespace('index-bar');

export default createComponent({
  mixins: [
    TouchMixin,
    ParentMixin('vanIndexBar'),
    BindEventMixin(function(bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      bind(this.scroller, 'scroll', this.onScroll);
    }),
  ],

  props: {
    zIndex: [Number, String],
    highlightColor: String,
    sticky: {
      type: Boolean,
      default: true,
    },
    stickyOffsetTop: {
      type: Number,
      default: 0,
    },
    indexList: {
      type: Array,
      default: genAlphabet,
    },
  },

  data() {
    return {
      activeAnchorIndex: null,
    };
  },

  computed: {
    sidebarStyle() {
      if (isDef(this.zIndex)) {
        return {
          zIndex: this.zIndex + 1,
        };
      }
    },

    highlightStyle() {
      const { highlightColor } = this;
      if (highlightColor) {
        return {
          color: highlightColor,
        };
      }
    },
  },

  watch: {
    indexList() {
      this.$nextTick(this.onScroll);
    },
  },

  methods: {
    onScroll() {
      if (isHidden(this.$el)) {
        return;
      }

      const scrollTop = getScrollTop(this.scroller);
      const scrollerRect = this.getScrollerRect();
      const rects = this.children.map(item => ({
        height: item.height,
        top: this.getElementTop(item.$el, scrollerRect),
      }));

      const active = this.getActiveAnchorIndex(scrollTop, rects);

      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        this.children.forEach((item, index) => {
          if (index === active || index === active - 1) {
            const rect = item.$el.getBoundingClientRect();
            item.left = rect.left;
            item.width = rect.width;
          } else {
            item.left = null;
            item.width = null;
          }

          if (index === active) {
            item.active = true;
            item.top =
              Math.max(this.stickyOffsetTop, rects[index].top - scrollTop) +
              scrollerRect.top;
          } else if (index === active - 1) {
            const activeItemTop = rects[active].top - scrollTop;
            item.active = activeItemTop > 0;
            item.top = activeItemTop + scrollerRect.top - item.height;
          } else {
            item.active = false;
          }
        });
      }
    },

    getScrollerRect() {
      if (this.scroller.getBoundingClientRect) {
        return this.scroller.getBoundingClientRect();
      }

      return {
        top: 0,
        left: 0,
      };
    },

    getElementTop(ele, scrollerRect) {
      const { scroller } = this;

      if (scroller === window || scroller === document.body) {
        return getElementTop(ele);
      }

      const eleRect = ele.getBoundingClientRect();

      return eleRect.top - scrollerRect.top + getScrollTop(scroller);
    },

    getActiveAnchorIndex(scrollTop, rects) {
      for (let i = this.children.length - 1; i >= 0; i--) {
        const prevHeight = i > 0 ? rects[i - 1].height : 0;
        const reachTop = this.sticky ? prevHeight + this.stickyOffsetTop : 0;

        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }
      return -1;
    },

    onClick(event) {
      this.scrollToElement(event.target);
    },

    onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        preventDefault(event);

        const { clientX, clientY } = event.touches[0];
        const target = document.elementFromPoint(clientX, clientY);
        if (target) {
          const { index } = target.dataset;

          /* istanbul ignore else */
          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },

    scrollToElement(element) {
      const { index } = element.dataset;
      if (!index) {
        return;
      }

      const match = this.children.filter(item => String(item.index) === index);
      if (match[0]) {
        match[0].scrollIntoView();

        if (this.sticky && this.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },

    onTouchEnd() {
      this.active = null;
    },
  },

  render() {
    const Indexes = this.indexList.map(index => {
      const active = index === this.activeAnchorIndex;

      return (
        <span
          class={bem('index', { active })}
          style={active ? this.highlightStyle : null}
          data-index={index}
        >
          {index}
        </span>
      );
    });

    return (
      <div class={bem()}>
        <div
          class={bem('sidebar')}
          style={this.sidebarStyle}
          onClick={this.onClick}
          onTouchstart={this.touchStart}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
          onTouchcancel={this.onTouchEnd}
        >
          {Indexes}
        </div>
        {this.slots('default')}
      </div>
    );
  },
});
