import 'themeCSS';
import * as utils from 'cloud-ui.vusion/src/utils';

// import Vue from 'vue';
// Vue.prototype.$env = Vue.prototype.$env || {};
// Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';

import '../src/style/base.less';

export * from './components';
export { utils };

export { install } from '@vusion/utils';
const requires = require.context('../src/', true, /\.less$/);
requires.keys().map((key) => {
  if (/\/style\//.test(key)) {
    return null;
  }
  return requires(key);
});
// requires.keys().forEach((key) => {
//     const name = requires(key).default.name || key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
//     Vue.component(name, requires(key).default);
// });
