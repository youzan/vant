import Waterfall from './directive.js';
import Vue from 'vue';

const install = function(Vue) {
  Vue.directive('WaterfallLower', Waterfall('lower'));
  Vue.directive('WaterfallUpper', Waterfall('upper'));
};

if (!Vue.prototype.$isServer) {
  Vue.use(install);
}

Waterfall.install = install;
export default Waterfall;
