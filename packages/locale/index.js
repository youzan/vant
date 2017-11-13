import Vue from 'vue';
import get from '../utils/get';
import camelize from '../utils/camelize';
import defaultLang from './lang/zh-CN';

const locale = {
  init() {
    Vue.util.defineReactive(Vue.prototype, '$vantLang', defaultLang);
  },

  use(lang) {
    Vue.prototype.$vantLang = lang;
  }
};

// component mixin
const i18n = {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name && name.indexOf('van') === 0 ? camelize(name.replace('van-', '')) + '.' : '';
      return path => get(this.$vantLang, prefix + path);
    }
  }
};

locale.init();
export default locale;
export { i18n };
