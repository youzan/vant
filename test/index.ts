import './plugin';
import Locale from '../src/locale';
import enUS from '../src/locale/lang/en-US';

Locale.use('en-US', enUS);

// promisify setTimeout
export function later(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export * from './dom';
export * from './event';
export { mount } from '@vue/test-utils';
