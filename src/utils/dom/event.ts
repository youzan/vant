import { isServer } from '..';
import { EventHandler } from '../types';

// eslint-disable-next-line import/no-mutable-exports
export let supportsPassive = false;

if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get() {
        /* istanbul ignore next */
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

export function on(
  target: EventTarget,
  event: string,
  handler: EventHandler,
  passive = false
) {
  if (!isServer) {
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : false
    );
  }
}

export function off(target: EventTarget, event: string, handler: EventHandler) {
  if (!isServer) {
    target.removeEventListener(event, handler);
  }
}

export function stopPropagation(event: Event) {
  event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
