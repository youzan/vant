import Vue from 'vue';
import { mount, TransitionStub } from '@vue/test-utils';
import { trigger, triggerDrag } from './event';
import { mockScrollTop, mockGetBoundingClientRect } from './dom';

// prevent vue warning log
Vue.config.silent = true;

// stub transition
Vue.component('transition', TransitionStub as any);

// promisify setTimeout
export function later(delay: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export {
  mount,
  trigger,
  triggerDrag,
  mockScrollTop,
  mockGetBoundingClientRect
};
