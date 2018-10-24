import Vue from 'vue';
import { mount, TransitionStub } from '@vue/test-utils';

// prevent vue warning log
Vue.config.silent = true;

export {
  mount
};

function getTouch(el, x, y) {
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
export function trigger(wrapper, eventName, x = 0, y = 0, options = {}) {
  const el = wrapper.element ? wrapper.element : wrapper;
  const touchList = options.touchList || [getTouch(el, x, y)];

  if (options.x || options.y) {
    touchList.push(getTouch(el, options.x, options.y));
  }

  const event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, {});
  event.touches = touchList;
  event.targetTouches = touchList;
  event.changedTouches = touchList;
  event.clientX = x;
  event.clientY = y;

  el.dispatchEvent(event);
}

// simulate drag gesture
export function triggerDrag(el, x = 0, y = 0) {
  trigger(el, 'touchstart', 0, 0);
  trigger(el, 'touchmove', x / 4, y / 4);
  trigger(el, 'touchmove', x / 3, y / 3);
  trigger(el, 'touchmove', x / 2, y / 2);
  trigger(el, 'touchmove', x, y);
  trigger(el, 'touchend', x, y);
}

// promisify setTimeout
export function later(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function transitionStub() {
  Vue.component('transition', TransitionStub);
}
