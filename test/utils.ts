import Vue from 'vue';
import { mount, TransitionStub, Wrapper } from '@vue/test-utils';

// prevent vue warning log
Vue.config.silent = true;

export { mount };

function getTouch(el: HTMLElement, x: number, y: number) {
  return {
    identifier: Date.now(),
    target: el,
    pageX: x,
    pageY: y,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5
  };
}

// Trigger pointer/touch event
export function trigger(
  wrapper: Wrapper<Vue> | HTMLElement,
  eventName: string,
  x: number = 0,
  y: number = 0,
  options: any = {}
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper;
  const touchList = options.touchList || [getTouch(el, x, y)];

  if (options.x || options.y) {
    touchList.push(getTouch(el, options.x, options.y));
  }

  const event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, {});

  Object.assign(event, {
    clientX: x,
    clientY: y,
    touches: touchList,
    targetTouches: touchList,
    changedTouches: touchList
  });

  el.dispatchEvent(event);
}

// simulate drag gesture
export function triggerDrag(el: Wrapper<Vue> | HTMLElement, x = 0, y = 0): void {
  trigger(el, 'touchstart', 0, 0);
  trigger(el, 'touchmove', x / 4, y / 4);
  trigger(el, 'touchmove', x / 3, y / 3);
  trigger(el, 'touchmove', x / 2, y / 2);
  trigger(el, 'touchmove', x, y);
  trigger(el, 'touchend', x, y);
}

// promisify setTimeout
export function later(delay: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function transitionStub(): void {
  Vue.component('transition', TransitionStub as any);
}
