import Locale from '../../../packages/locale';
import zhCN from '../../../packages/locale/lang/zh-CN';
import enUS from '../../../packages/locale/lang/en-US';

const langMap = {
  'en-US': {
    title: 'Vant - A Vue.js 2.0 Mobile UI at YouZan',
    messages: enUS
  },
  'zh-CN': {
    title: 'Vant - 有赞移动端 Vue 组件库',
    messages: zhCN
  }
};
let currentLang = '';

setLang(getDefaultLang());

function getDefaultLang() {
  const langs = Object.keys(langMap);
  const hash = location.hash;

  for (let i = 0; i < langs.length; i++) {
    if (hash.indexOf(langs[i]) !== -1) {
      return langs[i];
    }
  }

  const userLang = localStorage.getItem('VANT_LANGUAGE') || navigator.language || 'en-US';
  return userLang.indexOf('zh-') !== -1 ? 'zh-CN' : 'en-US';
}

export function setLang(lang) {
  if (currentLang === lang) {
    return;
  }

  currentLang = lang;
  if (window.localStorage) {
    localStorage.setItem('VANT_LANGUAGE', lang);
  }
  Locale.use(lang, langMap[lang].messages);
  document.title = langMap[lang].title;
}
