import Vue from 'vue';
import { mount, TransitionStub } from '@vue/test-utils';

// prevent vue warning log
Vue.config.silent = true;

// stub transition
Vue.component('transition', TransitionStub as any);

// promisify setTimeout
export function later(delay: number = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export * from './dom';
export * from './event';
export { mount };
