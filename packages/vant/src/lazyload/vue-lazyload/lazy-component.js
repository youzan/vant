import { h } from 'vue';
import { inBrowser } from '@vant/use';

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
      this.show && this.$slots.default ? this.$slots.default() : null
    );
  },

  data() {
    return {
      el: null,
      state: {
        loaded: false,
      },
      rect: {},
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
    getRect() {
      this.rect = this.$el.getBoundingClientRect();
    },

    checkInView() {
      this.getRect();
      return (
        inBrowser &&
        this.rect.top < window.innerHeight * lazy.options.preLoad &&
        this.rect.bottom > 0 &&
        this.rect.left < window.innerWidth * lazy.options.preLoad &&
        this.rect.right > 0
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
