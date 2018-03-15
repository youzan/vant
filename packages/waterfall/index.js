import Waterfall from './directive.js';

Waterfall.install = function(Vue) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[Vant warn] Waterfall is deprecated, please use List component instread.');
  }
  Vue.directive('WaterfallLower', Waterfall('lower'));
  Vue.directive('WaterfallUpper', Waterfall('upper'));
};

export default Waterfall;
