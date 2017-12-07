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
const global = isServer ? global : window;

/* istanbul ignore next */
const iRaf =
  global.requestAnimationFrame ||
  global.webkitRequestAnimationFrame ||
  fallback;

/* istanbul ignore next */
const iCancel =
  global.cancelAnimationFrame ||
  global.webkitCancelAnimationFrame ||
  global.clearTimeout;

export function raf(fn) {
  return iRaf.call(global, fn);
}

export function cancel(id) {
  iCancel.call(global, id);
}
