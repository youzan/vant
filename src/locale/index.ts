import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const { defineReactive } = (Vue as any).util;

defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return proto.$vantMessages[proto.$vantLang];
  },

  use(lang: string, messages?: object) {
    proto.$vantLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$vantMessages, messages);
  },
};
