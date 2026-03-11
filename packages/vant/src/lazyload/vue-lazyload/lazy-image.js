/**
 * This is a fork of [vue-lazyload](https://github.com/hilongjw/vue-lazyload) with Vue 3 support.
 * license at https://github.com/hilongjw/vue-lazyload/blob/master/LICENSE
 */

import { useRect } from '@vant/use';
import { loadImageAsync } from './util';
import { noop } from '../../utils';
import {
  h,
  ref,
  reactive,
  defineComponent,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue';

export default (lazyManager) =>
  defineComponent({
    props: {
      src: [String, Object],
      tag: {
        type: String,
        default: 'img',
      },
    },
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const renderSrc = ref('');
      const options = {
        src: '',
        error: '',
        loading: '',
        attempt: lazyManager.options.attempt,
      };
      const state = reactive({
        loaded: false,
        error: false,
        attempt: 0,
      });

      const init = () => {
        const { src, loading, error } = lazyManager.valueFormatter(props.src);
        state.loaded = false;
        options.src = src;
        options.error = error;
        options.loading = loading;
        renderSrc.value = options.loading;
      };

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
        options,
        checkInView() {
          const rect = useRect(instance.proxy.$el);
          return (
            rect.top < window.innerHeight * lazyManager.options.preLoad &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth * lazyManager.options.preLoad &&
            rect.right > 0
          );
        },
        load(onFinish = noop) {
          if (state.attempt > options.attempt - 1 && state.error) {
            if (
              process.env.NODE_ENV !== 'production' &&
              !lazyManager.options.silent
            ) {
              console.log(
                `[@vant/lazyload] ${options.src} tried too more than ${options.attempt} times`,
              );
            }
            onFinish();
            return;
          }
          const { src } = options;
          loadImageAsync(
            { src },
            ({ src }) => {
              renderSrc.value = src;
              state.loaded = true;
            },
            () => {
              state.attempt++;
              renderSrc.value = options.error;
              state.error = true;
            },
          );
        },
      };

      init();

      watch(
        () => props.src,
        () => {
          init();
          lazyManager.lazyLoadHandler();
        },
      );

      onMounted(() => {
        lazyManager.addLazyBox(lazyBox);
        lazyManager.lazyLoadHandler();
      });

      onBeforeUnmount(() => {
        lazyManager.removeComponent(lazyBox);
      });

      return () => h(props.tag, { src: renderSrc.value }, slots.default?.());
    },
  });
