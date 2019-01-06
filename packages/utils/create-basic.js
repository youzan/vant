/**
 * Create a basic component with common options
 */
import useSfc from './use/sfc';
import useBem from './use/bem';
import i18n from '../mixins/i18n';
import { isDef } from '.';

export default function (sfc) {
  sfc = useSfc('van-' + sfc.name)(sfc);
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = isDef;
  sfc.methods.b = useBem(sfc.name);

  return sfc;
}
