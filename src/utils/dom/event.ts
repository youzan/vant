import { isServer } from '..';
import { EventHandler, CompatibleWheelEvent } from '../types';

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
  } catch (e) { }
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

export function getWheelDelta(event: CompatibleWheelEvent) {
  let deltaX = 0
  let deltaY = 0

  switch (true) {
    case 'deltaX' in event:
      deltaX = -event.deltaX
      deltaY = -event.deltaY
      break
    case 'wheelDeltaX' in event:
      deltaX = (event.wheelDeltaX / 120)
      deltaY = (event.wheelDeltaY / 120)
      break
    case 'wheelDelta' in event:
      deltaX = (event.wheelDelta / 120)
      deltaY = deltaX
      break
    case 'detail' in event:
      deltaX = (-event.detail / 3)
      deltaY = deltaX
      break
    default:
      break
  }

  return {
    deltaX,
    deltaY,
  }
}
