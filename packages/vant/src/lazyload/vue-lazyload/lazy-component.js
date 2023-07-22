/**
 * This is a fork of [vue-lazyload](https://github.com/hilongjw/vue-lazyload) with Vue 3 support.
 * license at https://github.com/hilongjw/vue-lazyload/blob/master/LICENSE
 */

import { h } from 'vue';
import { inBrowser, useRect } from '@vant/use';

export default (lazy) => ({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },

  emits: ['show'],

  render() {
    return h(
      this.tag,
      this.show && this.$slots.default ? this.$slots.default() : null,
    );
  },

  data() {
    return {
      el: null,
      state: {
        loaded: false,
      },
      show: false,
    };
  },

  mounted() {
    this.el = this.$el;
    lazy.addLazyBox(this);
    lazy.lazyLoadHandler();
  },

  beforeUnmount() {
    lazy.removeComponent(this);
  },

  methods: {
    checkInView() {
      const rect = useRect(this.$el);
      return (
        inBrowser &&
        rect.top < window.innerHeight * lazy.options.preLoad &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth * lazy.options.preLoad &&
        rect.right > 0
      );
    },

    load() {
      this.show = true;
      this.state.loaded = true;
      this.$emit('show', this);
    },

    destroy() {
      return this.$destroy;
    },
  },
});
