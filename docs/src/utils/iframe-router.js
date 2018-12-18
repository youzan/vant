/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import { setLang } from './lang';
import { iframeReady, isMobile } from '.';

window.syncPath = function () {
  const router = window.vueRouter;
  const isInIframe = window !== window.top;
  const currentDir = router.history.current.path;
  const pathParts = currentDir.split('/');
  let lang = pathParts[0];
  if (currentDir[0] === '/') {
    lang = pathParts[1];
  }

  if (!isInIframe && !isMobile) {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.changePath(lang, currentDir);
      });
    }
    setLang(lang);
  } else if (isInIframe) {
    window.top.changePath(lang, currentDir);
  }
};

window.changePath = function (lang, path = '') {
  setLang(lang);
  window.vueRouter.replace(path);
};
