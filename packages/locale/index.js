import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const defaults = {
  root: null,
  lang: 'zh-CN'
};

const locale = {
  install(Vue) {
    const { root, lang } = defaults;

    if (root && root.$vantLang) {
      return;
    }
    defaults.root = Vue.prototype;
    Vue.util.defineReactive(defaults.root, '$vantLang', lang);
    Vue.util.defineReactive(defaults.root, '$vantMessages', { [lang]: defaultMessages });
  },

  use(lang, messages) {
    const { root } = defaults;

    if (root) {
      root.$vantLang = lang;
      this.add({ [lang]: messages });
    }
  },

  add(messages = {}) {
    const { root } = defaults;

    if (root) {
      deepAssign(root.$vantMessages, messages);
    }
  }
};

export default locale;
