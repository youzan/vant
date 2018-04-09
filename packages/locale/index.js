import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const defaultLang = 'zh-CN';
const locale = {
  install() {
    if (proto.$vantLang) {
      return;
    }
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

locale.install();

export default locale;
