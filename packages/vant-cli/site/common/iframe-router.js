/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import { iframeReady } from '.';

function getCurrentDir() {
  const router = window.vueRouter;
  return router.currentRoute.value.path;
}

export function syncPathToParent() {
  window.top.postMessage(
    {
      type: 'replacePath',
      value: getCurrentDir(),
    },
    '*'
  );
}

export function syncPathToChild() {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframeReady(iframe, () => {
      iframe.postMessage(
        {
          type: 'replacePath',
          value: getCurrentDir(),
        },
        '*'
      );
    });
  }
}

export function listenToSyncPath(router) {
  window.addEventListener('message', (event) => {
    const path = event.data || '';
    // should preserve hash for anchor
    if (router.currentRoute.value.path !== path) {
      router.replace(path).catch(() => {});
    }
  });
}
