import Vue from 'vue';
import docConfig from './doc.config';
import DemoList from './components/DemoList';
import DemoPages from './components/DemoPages';
import { demoWrapper } from './demo-common';
import { initIframeRouter } from './utils/iframe-router';

initIframeRouter();

const registerRoute = ({ mobile, componentMap }) => {
  const route = [
    {
      path: '*',
      redirect: () => `/${Vue.prototype.$vantLang}/`
    }
  ];

  Object.keys(docConfig).forEach(lang => {
    if (mobile) {
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
        } else if (mobile) {
          const module = componentMap[`./${path}/demo/index.vue`];
          if (module) {
            component = demoWrapper(module, path);
          }
        } else {
          const module =
            componentMap[`./${path}/README.${lang}.md`] ||
            componentMap[`./${path}/README.md`] ||
            componentMap[`./${path}.${lang}.md`];

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
