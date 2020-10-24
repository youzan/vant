/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import { iframeReady, isMobile } from '.';

window.syncPath = function() {
  const router = window.vueRouter;
  const isInIframe = window !== window.top;
  const currentDir = router.currentRoute.value.path;

  if (isInIframe) {
    window.top.replacePath(currentDir);
  } else if (!isMobile) {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.replacePath(currentDir);
      });
    }
  }
};

window.replacePath = function(path = '') {
  // should preserve hash for anchor
  if (window.vueRouter.currentRoute.value.path !== path) {
    window.vueRouter.replace(path).catch(() => {});
  }
};
