/**
 * This is a fork of [vue-lazyload](https://github.com/hilongjw/vue-lazyload) with Vue 3 support.
 * license at https://github.com/hilongjw/vue-lazyload/blob/master/LICENSE
 */

import { useRect } from '@vant/use';
import { loadImageAsync } from './util';
import { noop } from '../../utils';
import { h } from 'vue';

export default (lazyManager) => ({
  props: {
    src: [String, Object],
    tag: {
      type: String,
      default: 'img',
    },
  },
  render() {
    return h(
      this.tag,
      {
        src: this.renderSrc,
      },
      this.$slots.default?.(),
    );
  },
  data() {
    return {
      el: null,
      options: {
        src: '',
        error: '',
        loading: '',
        attempt: lazyManager.options.attempt,
      },
      state: {
        loaded: false,
        error: false,
        attempt: 0,
      },
      renderSrc: '',
    };
  },
  watch: {
    src() {
      this.init();
      lazyManager.addLazyBox(this);
      lazyManager.lazyLoadHandler();
    },
  },
  created() {
    this.init();
  },
  mounted() {
    this.el = this.$el;
    lazyManager.addLazyBox(this);
    lazyManager.lazyLoadHandler();
  },
  beforeUnmount() {
    lazyManager.removeComponent(this);
  },
  methods: {
    init() {
      const { src, loading, error } = lazyManager.valueFormatter(this.src);
      this.state.loaded = false;
      this.options.src = src;
      this.options.error = error;
      this.options.loading = loading;
      this.renderSrc = this.options.loading;
    },
    checkInView() {
      const rect = useRect(this.$el);
      return (
        rect.top < window.innerHeight * lazyManager.options.preLoad &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth * lazyManager.options.preLoad &&
        rect.right > 0
      );
    },
    load(onFinish = noop) {
      if (this.state.attempt > this.options.attempt - 1 && this.state.error) {
        if (
          process.env.NODE_ENV !== 'production' &&
          !lazyManager.options.silent
        ) {
          console.log(
            `[@vant/lazyload] ${this.options.src} tried too more than ${this.options.attempt} times`,
          );
        }

        onFinish();
        return;
      }
      const { src } = this.options;
      loadImageAsync(
        { src },
        ({ src }) => {
          this.renderSrc = src;
          this.state.loaded = true;
        },
        () => {
          this.state.attempt++;
          this.renderSrc = this.options.error;
          this.state.error = true;
        },
      );
    },
  },
});
