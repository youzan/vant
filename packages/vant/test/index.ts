import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import './plugin';
import Locale from '../src/locale';
import enUS from '../src/locale/lang/en-US';
// @ts-expect-error
import toDiffableHtml from 'diffable-html';

Locale.use('en-US', enUS);

expect.addSnapshotSerializer({
  serialize(val) {
    return toDiffableHtml(val).trim();
  },
  test(val) {
    return (
      typeof val === 'string' &&
      (val.includes('<div') || val.includes('<span') || val.includes('<button'))
    );
  },
});

// promisify setTimeout
export function later(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const renderComponentToString = async (
  ...args: Parameters<typeof createSSRApp>
) => {
  const app = createSSRApp(...args);
  const html = await renderToString(app);
  return html;
};

export * from './dom';
export * from './event';
export { mount } from '@vue/test-utils';
