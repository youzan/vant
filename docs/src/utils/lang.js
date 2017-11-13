import locale from '../../../packages/locale';
import zhCN from '../../../packages/locale/lang/zh-CN';
import enUS from '../../../packages/locale/lang/en-US';

const langMap = {
  'en-US': enUS,
  'zh-CN': zhCN
};

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
  locale.use(langMap[lang]);
  currentLang = lang;
}
