import 'cloud-ui.vusion/src/styles/base.css';
import './base.css';
import 'cloud-ui.vusion/src/styles/theme.css';

import Vue from 'vue';
// import { install } from '@vusion/utils';
// import * as CloudUI from 'cloud-ui.vusion';

// install(Vue, CloudUI);

// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
// import mock from '@vusion/mock';
// Vue.use(mock);

import variables from 'themeCSS?variables';
Vue.prototype.$theme = variables;

import './message';
