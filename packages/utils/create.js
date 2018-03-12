/**
 * Create a component with common options
 */
import '../locale';
import Icon from '../icon';
import i18n from '../mixins/i18n';
import install from './install';
import Loading from '../loading';

export default function(sfc) {
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n);
  sfc.components = sfc.components || {};
  sfc.components.icon = Icon;
  sfc.components.loading = Loading;

  return sfc;
};
