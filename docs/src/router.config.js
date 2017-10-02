import docConfig from './doc.config';
import { getLang } from './lang';
import componentDocs from '../examples-dist/entry-docs';
import componentDemos from '../examples-dist/entry-demos';
import './iframe-router';

const defaultLang = getLang();
// const navs = docConfig['zh-CN'].nav;
// const navConfig = docConfig;

const registerRoute = (isExample) => {
  const route = [{
    path: '/',
    redirect: `/${defaultLang}/`
  }, {
    path: '*',
    redirect: `/${defaultLang}/`
  }];

  Object.keys(docConfig).forEach((lang, index) => {
    const navs = docConfig[lang];
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
          component: isExample ? componentDemos[name] : componentDocs[name]
        });
      }
    }
  });

  return route;
};

export default registerRoute;
