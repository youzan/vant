import 'themeCSS';
import * as utils from 'cloud-ui.vusion/src/utils';
// import '../src/style/base.less'; // 下方有对src目录里所有less文件的引用

// import Vue from 'vue';
// Vue.prototype.$env = Vue.prototype.$env || {};
// Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';

export { utils };
export { install } from '@vusion/utils';
export * from './components';

const requires = require.context('../src/', true, /\.less$/);
requires.keys().forEach((key) => {
  requires(key);
});
// requires.keys().forEach((key) => {
//     const name = requires(key).default.name || key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
//     Vue.component(name, requires(key).default);
// });
