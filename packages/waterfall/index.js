import Waterfall from './directive.js';

const install = function(Vue) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[Vant warn] Waterfall is deprecated, please use List component instread.');
  }
  Vue.directive('WaterfallLower', Waterfall('lower'));
  Vue.directive('WaterfallUpper', Waterfall('upper'));
};

Waterfall.install = install;
export default Waterfall;
