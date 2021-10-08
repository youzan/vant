export * from './components';

import * as utils from 'cloud-ui.vusion/src/utils';
export { utils };

export { install } from '@vusion/utils';

import Vue from 'vue';
Vue.prototype.$env = Vue.prototype.$env || {};
Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';

import '../src/style/base.less';
const requires = require.context('../src/', true, /\.less$/);
requires.keys().map((key) => requires(key));
// requires.keys().forEach((key) => {
//     const name = requires(key).default.name || key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
//     Vue.component(name, requires(key).default);
// });
