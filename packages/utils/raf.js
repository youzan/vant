/**
 * requestAnimationFrame polyfill
 */

import { isServer } from './index';

let prev = Date.now();
function fallback(fn) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

const global = isServer ? global : window;
const iRaf =
  global.requestAnimationFrame ||
  global.webkitRequestAnimationFrame ||
  fallback;
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
