/**
 * requestAnimationFrame polyfill
 */

import { isServer } from './index';

let prev = Date.now();

/* istanbul ignore next */
function fallback(fn: FrameRequestCallback): number {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
const root = <Window>(isServer ? global : window);

/* istanbul ignore next */
const iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
const iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

export function raf(fn: FrameRequestCallback): number {
  return iRaf.call(root, fn);
}

export function cancel(id: number) {
  iCancel.call(root, id);
}
