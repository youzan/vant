/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */

import Vue from 'vue';

const isServer = Vue.prototype.$isServer;
const context = '@@clickoutsideContext';

export default {
  bind(el, binding) {
    const handler = event => {
      if (!el.contains(event.target)) {
        el[context].callback();
      }
    };

    el[context] = {
      handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };

    !isServer && document.addEventListener(el[context].arg, handler);
  },

  update(el, binding) {
    el[context].callback = binding.value;
  },

  unbind(el) {
    !isServer && document.removeEventListener(el[context].arg, el[context].handler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
