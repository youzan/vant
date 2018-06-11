import Vue from 'vue';
import docConfig from './doc.config';
import DemoList from './components/DemoList';
import componentDocs from './docs-entry';
import componentDemos from './demo-entry';
import DemoPages from './components/DemoPages';
import './utils/iframe-router';

const registerRoute = (isDemo) => {
  const route = [{
    path: '*',
    redirect: to => `/${Vue.prototype.$vantLang}/`
  }];

  Object.keys(docConfig).forEach((lang, index) => {
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

    function addRoute(page, lang) {
      let { path } = page;
      if (path) {
        path = path.replace('/', '');

        let component;
        if (path === 'demo') {
          component = DemoPages;
        } else {
          component = isDemo ? componentDemos[path] : componentDocs[`${path}.${lang}`];
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
  });

  return route;
};

export default registerRoute;
