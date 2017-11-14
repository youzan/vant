import Vue from 'vue';
import get from '../utils/get';
import camelize from '../utils/camelize';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const defaultLang = 'zh-CN';

// component mixin
const i18n = {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';
      const messages = this.$vantMessages[this.$vantLang];
      return path => get(messages, prefix + path) || get(messages, path);
    }
  }
};

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
