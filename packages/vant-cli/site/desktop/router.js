import { nextTick } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { isMobile, decamelize } from '../common';
import { config, documents } from 'site-desktop-shared';
import { getLang, setDefaultLang } from '../common/locales';
import { listenToSyncPath, syncPathToChild } from '../common/iframe-router';

if (isMobile) {
  location.replace('mobile.html' + location.hash);
}

const { locales, defaultLang } = config.site;

setDefaultLang(defaultLang);

function parseName(name) {
  if (name.indexOf('_') !== -1) {
    const pairs = name.split('_');
    const component = pairs.shift();

    return {
      component: `${decamelize(component)}`,
      lang: pairs.join('-'),
    };
  }

  return {
    component: `${decamelize(name)}`,
    lang: '',
  };
}

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
  const names = Object.keys(documents);

  if (locales) {
    routes.push({
      name: 'notFound',
      path: '/:path(.*)+',
      redirect: (route) => ({
        name: getLangFromRoute(route),
      }),
    });
  } else {
    routes.push({
      name: 'notFound',
      path: '/:path(.*)+',
      redirect: {
        name: 'home',
      },
    });
  }

  function addHomeRoute(Home, lang) {
    routes.push({
      name: lang || 'home',
      path: `/${lang || ''}`,
      component: Home,
      meta: { lang },
    });
  }

  names.forEach((name) => {
    const { component, lang } = parseName(name);

    if (component === 'home') {
      addHomeRoute(documents[name], lang);
    }

    if (lang) {
      routes.push({
        name: `${lang}/${component}`,
        path: `/${lang}/${component}`,
        component: documents[name],
        meta: {
          lang,
          name: component,
        },
      });
    } else {
      routes.push({
        name: `${component}`,
        path: `/${component}`,
        component: documents[name],
        meta: {
          name: component,
        },
      });
    }
  });

  return routes;
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    }

    return { top: 0 };
  },
});

router.afterEach(() => {
  nextTick(syncPathToChild);
});

if (config.site.simulator?.syncPathFromSimulator !== false) {
  listenToSyncPath(router);
}

window.vueRouter = router;
