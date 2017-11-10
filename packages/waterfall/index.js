import Waterfall from './directive.js';

const install = function(Vue) {
  Vue.directive('WaterfallLower', Waterfall('lower'));
  Vue.directive('WaterfallUpper', Waterfall('upper'));
};

Waterfall.install = install;
export default Waterfall;
