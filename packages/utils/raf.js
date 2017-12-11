/**
 * requestAnimationFrame polyfill
 */

import { isServer } from './index';

let prev = Date.now();

/* istanbul ignore next */
function fallback(fn) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
const _global = isServer ? global : window;

/* istanbul ignore next */
const iRaf =
  _global.requestAnimationFrame ||
  _global.webkitRequestAnimationFrame ||
  fallback;

/* istanbul ignore next */
const iCancel =
  _global.cancelAnimationFrame ||
  _global.webkitCancelAnimationFrame ||
  _global.clearTimeout;

export function raf(fn) {
  return iRaf.call(_global, fn);
}

export function cancel(id) {
  iCancel.call(_global, id);
}
