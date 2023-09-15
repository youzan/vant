// Utils
import { createNamespace, isDef, addUnit } from '../utils';
import { scrollLeftTo, scrollTopTo } from './utils';
import { route } from '../utils/router';
import { isHidden } from '../utils/dom/style';
import { on, off } from '../utils/dom/event';
import { unitToPx } from '../utils/format/unit';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor';
import {
  getScroller,
  getVisibleTop,
  getElementTop,
  getVisibleHeight,
  setRootScrollTop,
} from '../utils/dom/scroll';

// Mixins
import { ParentMixin } from '../mixins/relation';
import { BindEventMixin } from '../mixins/bind-event';

// Components
import Title from './Title';
import Sticky from '../sticky';
import Content from './Content';

const [createComponent, bem] = createNamespace('tabs');

export default createComponent({
  mixins: [
    ParentMixin('vanTabs'),
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      bind(window, 'resize', this.resize, true);

      if (this.scrollspy) {
        bind(this.scroller, 'scroll', this.onScroll, true);
      }
    }),
  ],

  inject: {
    vanPopup: {
      default: null,
    },
  },

  model: {
    prop: 'active',
  },

  props: {
    color: String,
    border: Boolean,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    scrollspy: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    beforeChange: Function,
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line',
    },
    active: {
      type: [Number, String],
      default: 0,
    },
    ellipsis: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: [Number, String],
      default: 0.3,
    },
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
    swipeThreshold: {
      type: [Number, String],
      default: 5,
    },
  },

  data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color,
      },
    };
  },

  computed: {
    // whether the nav is scrollable
    scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },

    navStyle() {
      return {
        borderColor: this.color,
        background: this.background,
      };
    },

    currentName() {
      const activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    },

    offsetTopPx() {
      return unitToPx(this.offsetTop);
    },

    scrollOffset() {
      if (this.sticky) {
        return this.offsetTopPx + this.tabHeight;
      }
      return 0;
    },
  },

  watch: {
    color: 'setLine',

    active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },

    children() {
      this.setCurrentIndexByName(this.active);
      this.setLine();

      this.$nextTick(() => {
        this.scrollIntoView(true);
      });
    },

    currentIndex() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.stickyFixed && !this.scrollspy) {
        setRootScrollTop(Math.ceil(getElementTop(this.$el) - this.offsetTopPx));
      }
    },

    scrollspy(val) {
      if (val) {
        on(this.scroller, 'scroll', this.onScroll, true);
      } else {
        off(this.scroller, 'scroll', this.onScroll);
      }
    },
  },

  mounted() {
    this.init();

    // https://github.com/vant-ui/vant/issues/7959
    if (this.vanPopup) {
      this.vanPopup.onReopen(() => {
        this.setLine();
      });
    }
  },

  activated() {
    this.init();
    this.setLine();
  },

  methods: {
    // @exposed-api
    resize() {
      this.setLine();
    },

    init() {
      this.$nextTick(() => {
        this.inited = true;
        this.tabHeight = getVisibleHeight(this.$refs.wrap);
        this.scrollIntoView(true);
      });
    },

    // update nav bar style
    setLine() {
      const shouldAnimate = this.inited;

      this.$nextTick(() => {
        const { titles } = this.$refs;

        if (
          !titles ||
          !titles[this.currentIndex] ||
          this.type !== 'line' ||
          isHidden(this.$el)
        ) {
          return;
        }

        const title = titles[this.currentIndex].$el;
        const { lineWidth, lineHeight } = this;
        const left = title.offsetLeft + title.offsetWidth / 2;

        const lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: this.color,
          transform: `translateX(${left}px) translateX(-50%)`,
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = `${this.duration}s`;
        }

        if (isDef(lineHeight)) {
          const height = addUnit(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        this.lineStyle = lineStyle;
      });
    },

    // correct the index of active tab
    setCurrentIndexByName(name) {
      const matched = this.children.filter((tab) => tab.computedName === name);
      const defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },

    setCurrentIndex(currentIndex) {
      const newIndex = this.findAvailableTab(currentIndex);

      if (!isDef(newIndex)) {
        return;
      }

      const newTab = this.children[newIndex];
      const newName = newTab.computedName;
      const shouldEmitChange = this.currentIndex !== null;

      this.currentIndex = newIndex;

      if (newName !== this.active) {
        this.$emit('input', newName);

        if (shouldEmitChange) {
          this.$emit('change', newName, newTab.title);
        }
      }
    },

    findAvailableTab(index) {
      const diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },

    // emit event when clicked
    onClick(item, index) {
      const { title, disabled, computedName } = this.children[index];
      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        callInterceptor({
          interceptor: this.beforeChange,
          args: [computedName],
          done: () => {
            this.setCurrentIndex(index);
            this.scrollToCurrentContent();
          },
        });

        this.$emit('click', computedName, title);
        route(item.$router, item);
      }
    },

    // scroll active tab into view
    scrollIntoView(immediate) {
      const { titles } = this.$refs;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      const { nav } = this.$refs;
      const title = titles[this.currentIndex].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;

      scrollLeftTo(nav, to, immediate ? 0 : +this.duration);
    },

    onSticktScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    },

    // @exposed-api
    scrollTo(name) {
      this.$nextTick(() => {
        this.setCurrentIndexByName(name);
        this.scrollToCurrentContent(true);
      });
    },

    scrollToCurrentContent(immediate = false) {
      if (this.scrollspy) {
        const target = this.children[this.currentIndex];
        const el = target?.$el;

        if (el) {
          const to = getElementTop(el, this.scroller) - this.scrollOffset;

          this.lockScroll = true;
          scrollTopTo(this.scroller, to, immediate ? 0 : +this.duration, () => {
            this.lockScroll = false;
          });
        }
      }
    },

    onScroll() {
      if (this.scrollspy && !this.lockScroll) {
        const index = this.getCurrentIndexOnScroll();
        this.setCurrentIndex(index);
      }
    },

    getCurrentIndexOnScroll() {
      const { children } = this;

      for (let index = 0; index < children.length; index++) {
        const top = getVisibleTop(children[index].$el);

        if (top > this.scrollOffset) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    },
  },

  render() {
    const { type, animated, scrollable } = this;

    const Nav = this.children.map((item, index) => (
      <Title
        ref="titles"
        refInFor
        type={type}
        dot={item.dot}
        info={item.badge ?? item.info}
        title={item.title}
        color={this.color}
        style={item.titleStyle}
        class={item.titleClass}
        isActive={index === this.currentIndex}
        disabled={item.disabled}
        scrollable={scrollable}
        activeColor={this.titleActiveColor}
        inactiveColor={this.titleInactiveColor}
        scopedSlots={{
          default: () => item.slots('title'),
        }}
        onClick={() => {
          this.onClick(item, index);
        }}
      />
    ));

    const Wrap = (
      <div
        ref="wrap"
        class={[
          bem('wrap', { scrollable }),
          { [BORDER_TOP_BOTTOM]: type === 'line' && this.border },
        ]}
      >
        <div
          ref="nav"
          role="tablist"
          class={bem('nav', [type, { complete: this.scrollable }])}
          style={this.navStyle}
        >
          {this.slots('nav-left')}
          {Nav}
          {type === 'line' && (
            <div class={bem('line')} style={this.lineStyle} />
          )}
          {this.slots('nav-right')}
        </div>
      </div>
    );

    return (
      <div class={bem([type])}>
        {this.sticky ? (
          <Sticky
            container={this.$el}
            offsetTop={this.offsetTop}
            onScroll={this.onSticktScroll}
          >
            {Wrap}
          </Sticky>
        ) : (
          Wrap
        )}
        <Content
          count={this.children.length}
          animated={animated}
          duration={this.duration}
          swipeable={this.swipeable}
          currentIndex={this.currentIndex}
          onChange={this.setCurrentIndex}
        >
          {this.slots()}
        </Content>
      </div>
    );
  },
});
