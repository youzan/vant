import Waterfall from './directive';

Waterfall.install = function (Vue) {
  Vue.directive('WaterfallLower', Waterfall('lower'));
  Vue.directive('WaterfallUpper', Waterfall('upper'));
};

export default Waterfall;
