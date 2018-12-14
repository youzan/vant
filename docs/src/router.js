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
    redirect: () => `/${Vue.prototype.$vantLang}/`
  }];

  Object.keys(docConfig).forEach((lang) => {
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
