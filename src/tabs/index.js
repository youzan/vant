import { createNamespace, isDef, suffixPx } from '../utils';
import { scrollLeftTo } from './utils';
import { on, off } from '../utils/dom/event';
import { ParentMixin } from '../mixins/relation';
import { BindEventMixin } from '../mixins/bind-event';
import {
  setScrollTop,
  getScrollTop,
  getElementTop,
  getScrollEventTarget
} from '../utils/dom/scroll';
import Title from './Title';
import Content from './Content';

const [createComponent, bem] = createNamespace('tabs');

export default createComponent({
  mixins: [
    ParentMixin('vanTabs'),
    BindEventMixin(function (bind, isBind) {
      this.bindScrollEvent(isBind);
      bind(window, 'resize', this.setLine, true);
    })
  ],

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
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    lazyRender: {
      type: Boolean,
      default: true
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
    this.scrollEvent = false;

    return {
      position: '',
      curActive: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },

  computed: {
    // whether the nav is scrollable
    scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
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

    children() {
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

    sticky(val) {
      this.bindScrollEvent(val);
    }
  },

  mounted() {
    this.onShow();
  },

  activated() {
    this.onShow();
    this.setLine();
  },

  methods: {
    onShow() {
      this.$nextTick(() => {
        this.inited = true;
        this.scrollIntoView(true);
      });
    },

    bindScrollEvent(isBind) {
      const sticky = this.sticky && isBind;

      if (this.scrollEvent !== sticky) {
        this.scrollEvent = sticky;
        this.scrollEl = this.scrollEl || getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
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
        const { titles } = this.$refs;

        if (!titles || !titles[this.curActive] || this.type !== 'line') {
          return;
        }

        const title = titles[this.curActive].$el;
        const { lineWidth, lineHeight } = this;
        const width = isDef(lineWidth) ? lineWidth : title.offsetWidth / 2;
        const left = title.offsetLeft + title.offsetWidth / 2;

        const lineStyle = {
          width: suffixPx(width),
          backgroundColor: this.color,
          transform: `translateX(${left}px) translateX(-50%)`
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = `${this.duration}s`;
        }

        if (isDef(lineHeight)) {
          const height = suffixPx(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        this.lineStyle = lineStyle;
      });
    },

    // correct the value of active
    correctActive(active) {
      active = +active;
      const exist = this.children.some(tab => tab.index === active);
      const defaultActive = (this.children[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },

    setCurActive(active) {
      active = this.findAvailableTab(active, active < this.curActive);
      if (isDef(active) && active !== this.curActive) {
        this.$emit('input', active);

        if (this.curActive !== null) {
          this.$emit('change', active, this.children[active].title);
        }

        this.curActive = active;
      }
    },

    findAvailableTab(active, reverse) {
      const diff = reverse ? -1 : 1;
      let index = active;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }
        index += diff;
      }
    },

    // emit event when clicked
    onClick(index) {
      const { title, disabled } = this.children[index];
      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },

    // scroll active tab into view
    scrollIntoView(immediate) {
      const { titles } = this.$refs;

      if (!this.scrollable || !titles || !titles[this.curActive]) {
        return;
      }

      const { nav } = this.$refs;
      const title = titles[this.curActive].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;

      scrollLeftTo(nav, to, immediate ? 0 : this.duration);
    },

    // render title slot of child tab
    renderTitle(el, index) {
      this.$nextTick(() => {
        this.$refs.titles[index].renderTitle(el);
      });
    }
  },

  render(h) {
    const { type, ellipsis, animated, scrollable } = this;

    const Nav = this.children.map((item, index) => (
      <Title
        ref="titles"
        refInFor
        type={type}
        title={item.title}
        color={this.color}
        active={index === this.curActive}
        ellipsis={ellipsis}
        disabled={item.disabled}
        scrollable={scrollable}
        activeColor={this.titleActiveColor}
        inactiveColor={this.titleInactiveColor}
        swipeThreshold={this.swipeThreshold}
        onClick={() => {
          this.onClick(index);
        }}
      />
    ));

    return (
      <div class={bem([type])}>
        <div
          ref="wrap"
          style={this.wrapStyle}
          class={[
            bem('wrap', { scrollable }),
            { 'van-hairline--top-bottom': type === 'line' && this.border }
          ]}
        >
          <div ref="nav" role="tablist" class={bem('nav', [type])} style={this.navStyle}>
            {this.slots('nav-left')}
            {Nav}
            {type === 'line' && <div class={bem('line')} style={this.lineStyle} />}
            {this.slots('nav-right')}
          </div>
        </div>
        <Content
          count={this.children.length}
          active={this.curActive}
          animated={animated}
          duration={this.duration}
          swipeable={this.swipeable}
          onChange={this.setCurActive}
        >
          {this.slots()}
        </Content>
      </div>
    );
  }
});
