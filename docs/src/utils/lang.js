import isMobile from './is-mobile';
import { iframeReady } from './iframe';

const userLang = window.localStorage.getItem('VANT_LANGUAGE') || window.navigator.language || 'en-US';
let defaultLang = 'en-US';
if (userLang.indexOf('zh-') !== -1) {
  defaultLang = 'zh-CN';
}

let currentLang = defaultLang;

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  window.localStorage.setItem('VANT_LANGUAGE', lang);
  currentLang = lang;
}

window.setLang = setLang;

window.syncLang = function syncLang() {
  const isInIframe = window !== window.top;
  const iframe = document.querySelector('iframe');

  if (!isInIframe && !isMobile && iframe) {
    iframeReady(iframe, () => {
      iframe.contentWindow.setLang(currentLang);
    });
  }
};
