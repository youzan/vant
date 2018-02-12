import docConfig from './doc.config';
import DemoList from './components/DemoList';
import componentDocs from '../markdown';
import componentDemos from '../demos';
import DemoPages from './components/DemoPages';
import Vue from 'vue';
import './utils/iframe-router';

const registerRoute = (isExample) => {
  const route = [{
    path: '*',
    redirect: to => `/${Vue.prototype.$vantLang}/`
  }];

  Object.keys(docConfig).forEach((lang, index) => {
    if (isExample) {
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
      if (isExample && page.noExample) {
        return;
      }

      const { path } = page;
      if (path) {
        const name = lang + '/' + path.replace('/', '');
        let component;

        if (path === '/demo') {
          component = DemoPages;
        } else {
          component = isExample ? componentDemos[path.replace('/', '')] : componentDocs[name];
        }

        route.push({
          name,
          component,
          path: `/${lang}${path}`,
          meta: {
            lang,
            name: page.title
          }
        });
      }
    }
  });

  return route;
};

export default registerRoute;
