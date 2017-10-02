const userLang = window.localStorage.getItem('VANT_LANGUAGE') || window.navigator.language || 'en-US';
let defaultLang = '/en-US';
if (userLang.indexOf('zh-') !== -1) {
  defaultLang = '/zh-CN';
}

let currentLang = defaultLang;

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
}
