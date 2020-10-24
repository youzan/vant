// promisify setTimeout
export function later(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export * from './dom';
export * from './event';
export { mount } from '@vue/test-utils';
