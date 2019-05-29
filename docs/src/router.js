import Vue from 'vue';
import docConfig from './doc.config';
import DemoList from './components/DemoList';
import componentDemos from './demo-entry';
import DemoPages from './components/DemoPages';
import './utils/iframe-router';

const docs = {};

function importAll(map, r) {
  r.keys().forEach(key => {
    map[key] = r(key);
  });
}

const docsFromMarkdown = require.context('../markdown', false, /(en-US|zh-CN)\.md$/);
const docsFromPackages = require.context('../../packages', true, /(en-US|zh-CN)\.md$/);

importAll(docs, docsFromMarkdown);
importAll(docs, docsFromPackages);

const registerRoute = isDemo => {
  const route = [
    {
      path: '*',
      redirect: () => `/${Vue.prototype.$vantLang}/`
    }
  ];

  Object.keys(docConfig).forEach(lang => {
    if (isDemo) {
      route.push({
        path: `/${lang}`,
        component: DemoList,
        meta: { lang }
      });
    } else {
      route.push({
        path: `/${lang}`,
        redirect: `/${lang}/intro`
      });
    }

    function addRoute(page, lang) {
      let { path } = page;
      if (path) {
        path = path.replace('/', '');

        let component;
        if (path === 'demo') {
          component = DemoPages;
        } else if (isDemo) {
          component = componentDemos[path];
        } else {
          const module =
            docs[`./${path}/${lang}.md`] ||
            docs[`./${path}.${lang}.md`];

          component = module.default;
        }

        if (!component) {
          return;
        }

        route.push({
          name: lang + '/' + path,
          component,
          path: `/${lang}/${path}`,
          meta: {
            lang,
            path,
            name: page.title
          }
        });
      }
    }

    const navs = docConfig[lang].nav || [];
    navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(page => addRoute(page, lang));
        });
      } else {
        addRoute(nav, lang);
      }
    });
  });

  return route;
};

export default registerRoute;
