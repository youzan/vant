import Vue, { watch, nextTick } from 'vue';
import VueRouter from 'vue-router';
import DemoHome from '../components/DemoHome.vue';
import { decamelize } from '../../common';
import { demos, config } from 'site-mobile-shared';
import { getLang, setDefaultLang } from '../../common/locales';
import { listenToSyncPath, syncPathToParent } from '../../common/iframe-sync';

Vue.use(VueRouter);
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
  const routes: any[] = [];
  const names = Object.keys(demos);
  const langs = locales ? Object.keys(locales) : [];

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
        name: component,
        path: `/${component}`,
        component: demos[name],
        meta: {
          name,
        },
      });
    }
  });

  if (langs.length) {
    routes.push({
      name: 'NotFound',
      path: '/:path(.*)+',
      redirect: (route) => ({
        name: getLangFromRoute(route),
      }),
    });

    langs.forEach((lang) => {
      routes.push({
        name: lang,
        path: `/${lang}`,
        component: DemoHome,
        meta: { lang },
      });
    });
  } else {
    routes.push({
      name: 'NotFound',
      path: '/:path(.*)+',
      redirect: {
        name: 'home',
      },
    });

    routes.push({
      name: 'home',
      path: '/',
      component: DemoHome,
    });
  }
  return routes;
}

export const router = new VueRouter({
  routes: getRoutes(),
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.afterEach(() => {
  if (!router.currentRoute.redirectedFrom) {
    nextTick(syncPathToParent);
  }
});

listenToSyncPath(router);

window.vueRouter = router;
