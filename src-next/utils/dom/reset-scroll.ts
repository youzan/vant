/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */

import { isIOS as checkIsIOS } from '../validate/system';
import { getRootScrollTop, setRootScrollTop } from './scroll';

const isIOS = checkIsIOS();

/* istanbul ignore next */
export function resetScroll() {
  if (isIOS) {
    setRootScrollTop(getRootScrollTop());
  }
}
