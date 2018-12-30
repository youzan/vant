<template>
  <div :class="b([type])">
    <div
      ref="wrap"
      :style="wrapStyle"
      :class="[
        b('wrap', { scrollable }),
        { 'van-hairline--top-bottom': type === 'line' }
      ]"
    >
      <div
        ref="nav"
        :class="b('nav', [type])"
        :style="navStyle"
      >
        <div
          v-if="type === 'line'"
          :class="b('line')"
          :style="lineStyle"
        />
        <div
          v-for="(tab, index) in tabs"
          ref="tabs"
          class="van-tab"
          :class="{
            'van-tab--active': index === curActive,
            'van-tab--disabled': tab.disabled,
            'van-tab--complete': !ellipsis
          }"
          :style="getTabStyle(tab, index)"
          @click="onClick(index)"
        >
          <span
            v-text="tab.title"
            ref="title"
            :class="{ 'van-ellipsis': ellipsis }"
          />
        </div>
      </div>
    </div>
    <div
      ref="content"
      :class="b('content', { animated })"
    >
      <div
        v-if="animated"
        :class="b('track')"
        :style="trackStyle"
      >
        <slot />
      </div>
      <slot v-else />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import { raf } from '../utils/raf';
import { on, off } from '../utils/event';
import scrollUtils from '../utils/scroll';
import Touch from '../mixins/touch';

export default create({
  name: 'tabs',

  mixins: [Touch],

  model: {
    prop: 'active'
  },

  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    offsetTop: Number,
    swipeable: Boolean,
    ellipsis: {
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
        borderColor: this.color
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
        scrollUtils.setScrollTop(window, scrollUtils.getElementTop(this.$el));
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
    this.correctActive(this.active);
    this.setLine();

    this.$nextTick(() => {
      this.handlers(true);
      this.scrollIntoView(true);
    });
  },

  activated() {
    this.$nextTick(() => {
      this.handlers(true);
      this.scrollIntoView(true);
    });
  },

  deactivated() {
    this.handlers(false);
  },

  beforeDestroy() {
    this.handlers(false);
  },

  methods: {
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
        this.scrollEl = this.scrollEl || scrollUtils.getScrollEventTarget(this.$el);
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
      const scrollTop = scrollUtils.getScrollTop(window) + this.offsetTop;
      const elTopToPageTop = scrollUtils.getElementTop(this.$el);
      const elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
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
      this.$nextTick(() => {
        const { tabs } = this.$refs;

        if (!tabs || !tabs[this.curActive] || this.type !== 'line') {
          return;
        }

        const tab = tabs[this.curActive];
        const { lineWidth, lineHeight } = this;
        const width = this.isDef(lineWidth) ? lineWidth : (tab.offsetWidth / 2);
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        const lineStyle = {
          width: `${width}px`,
          backgroundColor: this.color,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        };

        if (this.isDef(lineHeight)) {
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
      if (this.isDef(active) && active !== this.curActive) {
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
      const frames = Math.round(this.duration * 1000 / 16);
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

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / (this.swipeThreshold) + '%';
      }

      return style;
    }
  }
});
</script>
