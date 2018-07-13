/**
 * Create a basic component with common options
 */
import '../locale';
import bem from '../mixins/bem';
import i18n from '../mixins/i18n';
import { isDef } from './';

const install = function(Vue) {
  Vue.component(this.name, this);
};

export default function(sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = isDef;

  return sfc;
};
