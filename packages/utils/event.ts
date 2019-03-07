/* eslint-disable no-empty */
/* eslint-disable getter-return */
/* eslint-disable import/no-mutable-exports */
import { noop, isServer } from '.';

type EventHanlder = (event?: Event) => void;

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
    window.addEventListener('test-passive', noop, opts);
  } catch (e) {}
}

export function on(target: HTMLElement, event: string, handler: EventHanlder, passive = false) {
  if (!isServer) {
    target.addEventListener(event, handler, supportsPassive ? { capture: false, passive } : false);
  }
}

export function off(target: HTMLElement, event: string, handler: EventHanlder) {
  !isServer && target.removeEventListener(event, handler);
}

export function stop(event: Event) {
  event.stopPropagation();
}

export function prevent(event: Event) {
  event.preventDefault();
}
