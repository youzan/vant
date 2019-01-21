/* eslint-disable import/no-mutable-exports */
import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

let lang = 'zh-CN';
const proto = Vue.prototype;
const messages = { [lang]: defaultMessages };

const locale = {
  install() {
    if (proto.$vantLang) {
      return;
    }
    Vue.util.defineReactive(proto, '$vantLang', lang);
    Vue.util.defineReactive(proto, '$vantMessages', messages);
  },

  use(newLang, messages) {
    lang = newLang;
    proto.$vantLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$vantMessages, messages);
  }
};

locale.install();

export default locale;
export { lang, messages };
