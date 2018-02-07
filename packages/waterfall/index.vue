<template>
  <div class="van-waterfall">
    <slot />
    <div class="van-waterfall__loading" v-show="loading">
      <slot name="loading">
        <loading type="spinner" />
        <span class="van-waterfall__loading-text">加载中</span>
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import utils from '../utils/scroll';
import { on, off } from '../utils/event';

export default create({
  name: 'van-waterfall',

  model: {
    prop: 'loading'
  },

  props: {
    loading: Boolean,
    disabled: Boolean,
    immediateCheck: Boolean,
    offset: {
      type: Number,
      default: 300
    }
  },

  mounted() {
    this.scroller = utils.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.onScroll();
    }
  },

  destroyed() {
    this.handler(false);
  },

  activated() {
    this.handler(true);
  },

  deactivated() {
    this.handler(false);
  },

  watch: {
    loading() {
      this.$nextTick(this.onScroll);
    },

    disabled() {
      this.$nextTick(this.onScroll);
    }
  },

  methods: {
    onScroll() {
      if (this.loading || this.disabled) {
        return;
      }

      const el = this.$el;
      const { scroller } = this;
      const scrollerHeight = utils.getVisibleHeight(scroller);
      if (!scrollerHeight) {
        return;
      }

      const scrollTop = utils.getScrollTop(scroller);
      const targetBottom = scrollTop + scrollerHeight;

      let reachBottom = false;
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        const elBottom =
          utils.getElementTop(el) -
          utils.getElementTop(scroller) +
          utils.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }

      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('reach-bottom', { target: scroller, top: scrollTop });
      }
    },

    handler(bind) {
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.onScroll);
      }
    }
  }
});
</script>
