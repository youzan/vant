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
const root = isServer ? global : window;

/* istanbul ignore next */
const iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
const iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

export function raf(fn) {
  return iRaf.call(root, fn);
}

export function cancel(id) {
  iCancel.call(root, id);
}
