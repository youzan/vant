import { isServer } from './';

export let supportsPassive = false;
if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

export function on(target, event, handler, passive = false) {
  !isServer &&
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : false
    );
}

export function off(target, event, handler) {
  !isServer && target.removeEventListener(event, handler);
}
