import docConfig from './doc.config';
import { getLang } from './utils/lang';
import DemoList from './components/demo-list';
import componentDocs from '../examples-dist/entry-docs';
import componentDemos from '../examples-dist/entry-demos';
import './utils/iframe-router';

const registerRoute = (isExample) => {
  const route = [{
    path: '/',
    redirect: to => {
      return `/${getLang()}/`;
    }
  }, {
    path: '*',
    redirect: to => {
      return `/${getLang()}/`;
    }
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
        redirect: `/${lang}/component/quickstart`
      });
    }

    const navs = docConfig[lang].nav || [];
    navs.forEach(nav => {
      if (isExample && !nav.showInMobile) {
        return;
      }

      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(page => addRoute(page, lang));
        });
      } else if (nav.children) {
        nav.children.forEach(page => addRoute(page, lang));
      } else {
        addRoute(nav, lang);
      }
    });

    function addRoute(page, lang) {
      const { path } = page;
      if (path) {
        const name = lang + '/' + path.replace('/', '');
        route.push({
          path: `/${lang}/component${path}`,
          component: isExample ? componentDemos[name] : componentDocs[name],
          meta: { lang }
        });
      }
    }
  });

  return route;
};

export default registerRoute;
