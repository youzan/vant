import Vue from 'vue';
import VueRouter from 'vue-router';
import DemoHome from './components/DemoHome';
import { decamelize } from '../common';
import { demos, config } from 'site-mobile-shared';
import { getLang, setDefaultLang } from '../common/locales';
import { listenToSyncPath, syncPathToParent } from '../common/iframe-router';

const { locales, defaultLang } = config.site;

setDefaultLang(defaultLang);

function getLangFromRoute(route) {
  const lang = route.path.split('/')[1];
  const langs = Object.keys(locales);

  if (langs.indexOf(lang) !== -1) {
    return lang;
  }

  return getLang();
}

function getRoutes() {
  const routes = [];
  const names = Object.keys(demos);
  const langs = locales ? Object.keys(locales) : [];

  if (langs.length) {
    routes.push({
      path: '*',
      redirect: (route) => `/${getLangFromRoute(route)}/`,
    });

    langs.forEach((lang) => {
      routes.push({
        path: `/${lang}`,
        component: DemoHome,
        meta: { lang },
      });
    });
  } else {
    routes.push({
      path: '*',
      redirect: () => '/',
    });

    routes.push({
      path: '/',
      component: DemoHome,
    });
  }

  names.forEach((name) => {
    const component = decamelize(name);

    if (langs.length) {
      langs.forEach((lang) => {
        routes.push({
          name: `${lang}/${component}`,
          path: `/${lang}/${component}`,
          component: demos[name],
          meta: {
            name,
            lang,
          },
        });
      });
    } else {
      routes.push({
        name,
        path: `/${component}`,
        component: demos[name],
        meta: {
          name,
        },
      });
    }
  });

  return routes;
}

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'hash',
  routes: getRoutes(),
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
});

router.afterEach(() => {
  if (!router.currentRoute.redirectedFrom) {
    syncPathToParent();
  }
});

listenToSyncPath(router);

window.vueRouter = router;
