/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import isMobile from './utils/is-mobile';
import { iframeReady } from './utils/iframe';

window.syncPath = function(dir) {
  const router = window.vueRouter;
  const isInIframe = window !== window.top;
  const currentDir = router.history.current.path;
  const iframe = document.querySelector('iframe');

  if (!isInIframe && !isMobile && iframe) {
    iframeReady(iframe, () => {
      iframe.contentWindow.changePath(currentDir);
    });
  }
};

window.changePath = function(path = '') {
  const pathParts = path.split('/');
  let lang = pathParts[0];
  if (path[0] === '/') {
    lang = pathParts[1];
  }

  window.setLang(lang);
  window.vueRouter.replace(path);
};
