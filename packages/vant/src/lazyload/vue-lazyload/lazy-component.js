/**
 * This is a fork of [vue-lazyload](https://github.com/hilongjw/vue-lazyload) with Vue 3 support.
 * license at https://github.com/hilongjw/vue-lazyload/blob/master/LICENSE
 */

import {
  h,
  ref,
  reactive,
  defineComponent,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { inBrowser, useRect } from '@vant/use';

export default (lazy) =>
  defineComponent({
    props: {
      tag: {
        type: String,
        default: 'div',
      },
    },

    emits: ['show'],

    setup(_, { emit }) {
      const instance = getCurrentInstance();
      const el = ref(null);
      const show = ref(false);
      const state = reactive({
        loaded: false,
      });

      const checkInView = () => {
        const rect = useRect(instance.proxy.$el);
        return (
          inBrowser &&
          rect.top < window.innerHeight * lazy.options.preLoad &&
          rect.bottom > 0 &&
          rect.left < window.innerWidth * lazy.options.preLoad &&
          rect.right > 0
        );
      };

      const load = () => {
        show.value = true;
        state.loaded = true;
        emit('show', instance.proxy);
      };

      const destroy = () => instance.proxy.$destroy;

      onMounted(() => {
        el.value = instance.proxy.$el;
        lazy.addLazyBox(instance.proxy);
        lazy.lazyLoadHandler();
      });

      onBeforeUnmount(() => {
        lazy.removeComponent(instance.proxy);
      });

      return {
        el,
        show,
        state,
        checkInView,
        load,
        destroy,
      };
    },

    render() {
      return h(
        this.tag,
        this.show && this.$slots.default ? this.$slots.default() : null,
      );
    },
  });
