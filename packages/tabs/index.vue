<template>
  <div class="van-tabs" :class="`van-tabs--${type}`">
    <div :class="{ 'van-tabs__swipe': scrollable, 'van-hairline--top-bottom': type === 'line' }">
      <div class="van-tabs__nav" :class="`van-tabs__nav--${type}`" ref="nav">
        <div v-if="type === 'line'" class="van-tabs__nav-bar" :style="navBarStyle" />
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          ref="tabs"
          class="van-tab"
          :class="{
            'van-tab--active': index === curActive,
            'van-tab--disabled': tab.disabled
          }"
          @click="onClick(index)"
        >
          <span>{{ tab.title }}</span>
        </div>
      </div>
    </div>
    <div class="van-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { raf } from '../utils/raf';

export default {
  name: 'van-tabs',

  props: {
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
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data() {
    this.winWidth = this.$isServer ? 0 : window.innerWidth;

    return {
      tabs: [],
      curActive: 0,
      navBarStyle: {}
    };
  },

  watch: {
    active(val) {
      this.correctActive(val);
    },

    tabs(tabs) {
      this.correctActive(this.curActive);
      this.setNavBar();
    },

    curActive() {
      this.scrollIntoView();
      this.setNavBar();
    }
  },

  mounted() {
    this.correctActive(this.active);
    this.setNavBar();
  },

  computed: {
    scrollable() {
      return this.tabs.length > this.swipeThreshold;
    }
  },

  methods: {
    setNavBar() {
      this.$nextTick(() => {
        const tab = this.$refs.tabs[this.curActive];
        this.navBarStyle = {
          width: `${tab.offsetWidth || 0}px`,
          transform: `translate3d(${tab.offsetLeft || 0}px, 0, 0)`,
          transitionDuration: `${this.duration}s`
        }
      });
    },

    correctActive(active) {
      active = +active;
      const exist = this.tabs.some(tab => tab.index === active);
      this.curActive = exist ? active : (this.tabs[0].index || 0);
    },

    onClick(index) {
      if (this.tabs[index].disabled) {
        this.$emit('disabled', index);
      } else {
        this.$emit('click', index);
        this.curActive = index;
      }
    },

    scrollIntoView() {
      if (!this.scrollable) {
        return;
      }

      const tab = this.$refs.tabs[this.curActive];
      const { nav } = this.$refs;
      const { winWidth } = this;
      const { scrollLeft } = nav;
      const { offsetLeft, offsetWidth: tabWidth } = tab;

      // out of right side
      if ((winWidth + scrollLeft - offsetLeft - tabWidth * 1.8) < 0) {
        this.scrollTo(nav, scrollLeft, offsetLeft + tabWidth * 1.8 - winWidth);
      }
      // out of left side
      else if (offsetLeft < (scrollLeft + tabWidth * 0.8)) {
        this.scrollTo(nav, scrollLeft, offsetLeft - tabWidth * 0.8);
      }
    },

    scrollTo(el, from, to) {
      let count = 0;
      const frames = Math.round(this.duration * 1000 / 16);
      const animate = () => {
        el.scrollLeft += (to - from) / frames;
        if (++count < frames) {
          raf(animate);
        }
      }
      animate();
    }
  }
};
</script>
