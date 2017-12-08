/**
 * Create a component with common options
 */
import Icon from '../icon';
import Loading from '../loading';
import install from './install';
import i18n from '../mixins/i18n';

export default function(sfc) {
  sfc.mixins = sfc.mixins || [];
  sfc.components = sfc.components || {};
  sfc.install = sfc.install || install;
  sfc.mixins.push(i18n);
  sfc.components.icon = Icon;
  sfc.components.loading = Loading;

  return sfc;
};
