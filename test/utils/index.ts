import Vue from 'vue';
import './transition';
import { mount } from '@vue/test-utils';
import { trigger, triggerDrag } from './event';
import { mockScrollTop, mockGetBoundingClientRect } from './dom';

// prevent vue warning log
Vue.config.silent = true;

// promisify setTimeout
function later(delay: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export { mount, later, trigger, triggerDrag, mockScrollTop, mockGetBoundingClientRect };
