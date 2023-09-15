/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

let queue = [];
let isIframeReady = false;

function iframeReady(callback) {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

if (window.top === window) {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'iframeReady') {
      isIframeReady = true;
      queue.forEach((callback) => callback());
      queue = [];
    }
  });
} else {
  window.top.postMessage({ type: 'iframeReady' }, '*');
}

function getCurrentDir() {
  const router = window.vueRouter;
  return router.history.current.path;
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
    iframeReady(() => {
      iframe.contentWindow.postMessage(
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
    if (event.data?.type !== 'replacePath') {
      return;
    }

    const path = event.data?.value || '';
    // should preserve hash for anchor
    if (router.currentRoute.path !== path) {
      router.replace(path).catch(() => {});
    }
  });
}
