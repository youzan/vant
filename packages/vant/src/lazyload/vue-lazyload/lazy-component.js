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

    setup(props, { slots, emit }) {
      const instance = getCurrentInstance();
      const show = ref(false);
      const state = reactive({
        loaded: false,
      });

      const lazyBox = {
        get el() {
          return instance.proxy.$el;
        },
        get $el() {
          return instance.proxy.$el;
        },
        get $parent() {
          return instance.proxy.$parent;
        },
        state,
        checkInView() {
          const rect = useRect(instance.proxy.$el);
          return (
            inBrowser &&
            rect.top < window.innerHeight * lazy.options.preLoad &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth * lazy.options.preLoad &&
            rect.right > 0
          );
        },
        load() {
          show.value = true;
          state.loaded = true;
          emit('show', instance.proxy);
        },
        destroy() {
          return undefined;
        },
      };

      onMounted(() => {
        lazy.addLazyBox(lazyBox);
        lazy.lazyLoadHandler();
      });

      onBeforeUnmount(() => {
        lazy.removeComponent(lazyBox);
      });

      return () =>
        h(props.tag, show.value && slots.default ? slots.default() : null);
    },
  });
