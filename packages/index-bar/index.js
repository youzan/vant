import { use } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { ParentMixin } from '../mixins/relation';

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
    }
  },

  data() {
    return {
      childrenTopList: [],
      isInTransition: false,
      currentAnchorIndex: -1,
      nextAnchorIndex: -1,
      alpha: 1
    };
  },

  computed: {
    childrenLen() {
      return this.childrenTopList.length;
    },

    activeAnchorSlot() {
      return this.currentAnchorIndex > -1 ? this.children[this.currentAnchorIndex].defaultSlot : '';
    },

    activeAnchorVisible() {
      return !this.isInTransition && this.currentAnchorIndex > -1;
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onClick(event) {
      this.scrollToElement(event.target);
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
        this.scrollToElement(target);
      }
    },

    scrollToElement(element, setActive) {
      if (!element) {
        return;
      }

      const { index } = element.dataset;
      if (!index) {
        return;
      }

      const match = this.children.filter(item => String(item.index) === index);
      if (match[0]) {
        match[0].scrollIntoView();
        this.$emit('select', match[0].index);
      }
    },

    onTouchEnd() {
      this.active = null;
    },

    getTop() {
      let currentElem = this.$refs.indexBar;
      let top = 0;
      while (currentElem) {
        top += currentElem.offsetTop;
        currentElem = currentElem.offsetParent;
      }
      return top;
    },

    onScroll() {
      const { scrollTop } = document.scrollingElement;
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
      window.addEventListener('scroll', this.onScroll, false);
    }
  },

  render(h) {
    return (
      <div
        ref="indexBar"
        class={bem()}
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
            <span class={bem('index', { highlight: id === this.currentAnchorIndex })} data-index={index}>
              {index}
            </span>
          ))}
        </div>

        <div
          vShow={this.activeAnchorVisible}
          class={[bem('active'), 'van-hairline--bottom']}
          style={{ zIndex: this.zIndex }}
        >
          {this.activeAnchorSlot}
        </div>
        {this.slots('default')}
      </div>
    );
  }
});
