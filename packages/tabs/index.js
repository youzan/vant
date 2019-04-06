import { use, isDef } from '../utils';
import { raf } from '../utils/raf';
import { on, off } from '../utils/event';
import { TouchMixin } from '../mixins/touch';
import { setScrollTop, getScrollTop, getElementTop, getScrollEventTarget } from '../utils/scroll';

const [sfc, bem] = use('tabs');
const tabBem = use('tab')[1];

export default sfc({
  mixins: [TouchMixin],

  model: {
    prop: 'active'
  },

  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    offsetTop: Number,
    swipeable: Boolean,
    background: String,
    titleActiveColor: String,
    titleInactiveColor: String,
    ellipsis: {
      type: Boolean,
      default: true
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: Number,
      default: null
    },
    lineHeight: {
      type: Number,
      default: null
    },
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.3
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data() {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {
        backgroundColor: this.color
      },
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },

  computed: {
    // whether the nav is scrollable
    scrollable() {
      return this.tabs.length > this.swipeThreshold || !this.ellipsis;
    },

    wrapStyle() {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          };
        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          };
        default:
          return null;
      }
    },

    navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },

    trackStyle() {
      if (this.animated) {
        return {
          left: `${-1 * this.curActive * 100}%`,
          transitionDuration: `${this.duration}s`
        };
      }
    }
  },

  watch: {
    active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },

    color() {
      this.setLine();
    },

    tabs() {
      this.correctActive(this.curActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },

    curActive() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.position === 'top' || this.position === 'bottom') {
        setScrollTop(window, getElementTop(this.$el) - this.offsetTop);
      }
    },

    sticky() {
      this.handlers(true);
    },

    swipeable() {
      this.handlers(true);
    }
  },

  mounted() {
    this.onShow();
  },

  activated() {
    this.onShow();
    this.setLine();
  },

  deactivated() {
    this.handlers(false);
  },

  beforeDestroy() {
    this.handlers(false);
  },

  methods: {
    onShow() {
      this.$nextTick(() => {
        this.inited = true;
        this.handlers(true);
        this.scrollIntoView(true);
      });
    },

    // whether to bind sticky listener
    handlers(bind) {
      const { events } = this;
      const sticky = this.sticky && bind;
      const swipeable = this.swipeable && bind;

      // listen to window resize event
      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? on : off)(window, 'resize', this.setLine, true);
      }

      // listen to scroll event
      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      }

      // listen to touch event
      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        const { content } = this.$refs;
        const action = swipeable ? on : off;

        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },

    // watch swipe touch end
    onTouchEnd() {
      const { direction, deltaX, curActive } = this;
      const minSwipeDistance = 50;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },

    // adjust tab position
    onScroll() {
      const scrollTop = getScrollTop(window) + this.offsetTop;
      const elTopToPageTop = getElementTop(this.$el);
      const elBottomToPageTop =
        elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
      if (scrollTop > elBottomToPageTop) {
        this.position = 'bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top';
      } else {
        this.position = '';
      }
      const scrollParams = {
        scrollTop,
        isFixed: this.position === 'top'
      };
      this.$emit('scroll', scrollParams);
    },

    // update nav bar style
    setLine() {
      const shouldAnimate = this.inited;

      this.$nextTick(() => {
        const { tabs } = this.$refs;

        if (!tabs || !tabs[this.curActive] || this.type !== 'line') {
          return;
        }

        const tab = tabs[this.curActive];
        const { lineWidth, lineHeight } = this;
        const width = isDef(lineWidth) ? lineWidth : tab.offsetWidth / 2;
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        const lineStyle = {
          width: `${width}px`,
          backgroundColor: this.color,
          transform: `translateX(${left}px)`
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = `${this.duration}s`;
        }

        if (isDef(lineHeight)) {
          const height = `${lineHeight}px`;
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        this.lineStyle = lineStyle;
      });
    },

    // correct the value of active
    correctActive(active) {
      active = +active;
      const exist = this.tabs.some(tab => tab.index === active);
      const defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },

    setCurActive(active) {
      active = this.findAvailableTab(active, active < this.curActive);
      if (isDef(active) && active !== this.curActive) {
        this.$emit('input', active);

        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title);
        }
        this.curActive = active;
      }
    },

    findAvailableTab(active, reverse) {
      const diff = reverse ? -1 : 1;
      let index = active;

      while (index >= 0 && index < this.tabs.length) {
        if (!this.tabs[index].disabled) {
          return index;
        }
        index += diff;
      }
    },

    // emit event when clicked
    onClick(index) {
      const { title, disabled } = this.tabs[index];
      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },

    // scroll active tab into view
    scrollIntoView(immediate) {
      const { tabs } = this.$refs;

      if (!this.scrollable || !tabs || !tabs[this.curActive]) {
        return;
      }

      const { nav } = this.$refs;
      const { scrollLeft, offsetWidth: navWidth } = nav;
      const { offsetLeft, offsetWidth: tabWidth } = tabs[this.curActive];

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate);
    },

    // animate the scrollLeft of nav
    scrollTo(el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from;
        return;
      }

      let count = 0;
      const frames = Math.round((this.duration * 1000) / 16);
      const animate = () => {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */
        if (++count < frames) {
          raf(animate);
        }
      };
      animate();
    },

    // render title slot of child tab
    renderTitle(el, index) {
      this.$nextTick(() => {
        const title = this.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    },

    getTabStyle(item, index) {
      const style = {};
      const { color } = this;
      const active = index === this.curActive;
      const isCard = this.type === 'card';

      // theme color
      if (color) {
        if (!item.disabled && isCard && !active) {
          style.color = color;
        }
        if (!item.disabled && isCard && active) {
          style.backgroundColor = color;
        }
        if (isCard) {
          style.borderColor = color;
        }
      }

      const titleColor = active ? this.titleActiveColor : this.titleInactiveColor;
      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + '%';
      }

      return style;
    }
  },

  render(h) {
    const { type, ellipsis, animated, scrollable } = this;

    const Nav = this.tabs.map((tab, index) => (
      <div
        ref="tabs"
        refInFor
        class={tabBem({
          active: index === this.curActive,
          disabled: tab.disabled,
          complete: !ellipsis
        })}
        style={this.getTabStyle(tab, index)}
        onClick={() => {
          this.onClick(index);
        }}
      >
        <span ref="title" refInFor class={{ 'van-ellipsis': ellipsis }}>
          {tab.title}
        </span>
      </div>
    ));

    return (
      <div class={bem([type])}>
        <div
          ref="wrap"
          style={this.wrapStyle}
          class={[bem('wrap', { scrollable }), { 'van-hairline--top-bottom': type === 'line' }]}
        >
          <div ref="nav" class={bem('nav', [type])} style={this.navStyle}>
            {this.slots('nav-left')}
            {type === 'line' && <div class={bem('line')} style={this.lineStyle} />}
            {Nav}
            {this.slots('nav-right')}
          </div>
        </div>
        <div ref="content" class={bem('content', { animated })}>
          {animated ? (
            <div class={bem('track')} style={this.trackStyle}>
              {this.slots()}
            </div>
          ) : (
            this.slots()
          )}
        </div>
      </div>
    );
  }
});
