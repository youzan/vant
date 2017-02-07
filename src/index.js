import Sample from '../packages/sample/index.js';
import Button from '../packages/button/index.js';
import Switch from '../packages/switch/index.js';
import 'es6-promise/auto';
import axios from 'axios';
import foreach from 'lodash/foreach';
import filter from 'lodash/filter';
import find from 'lodash/find';
import map from 'lodash/map';
// zenui
import '../packages/zenui/src/index.pcss';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Sample.name, Sample);
  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1',
  axios,
  _: {
    foreach,
    filter,
    find,
    map
  },
  Sample,
  Button,
  Switch
};
