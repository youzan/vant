mport Vue from 'vue';
import { get, camelize } from '../utils';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

// component mixin
const i18n = {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';
      const messages = this.$vantMessages[this.$vantLang];

      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
};

const proto = Vue.prototype;
const defaultLang = 'zh-CN';
const locale = {
  i18n,

  init() {
    Vue.util.defineReactive(proto, '$vantLang', defaultLang);
    Vue.util.defineReactive(proto, '$vantMessages', { [defaultLang]: defaultMessages });
  },

  use(lang, messages) {
    proto.$vantLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$vantMessages, messages);
  }
};

locale.init();
export default locale;
export { i18n };
