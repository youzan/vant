import { lazy } from 'react';
import { decamelize } from '../common/index.js';
import { demos, config } from 'site-mobile-shared';
import { getLang, setDefaultLang } from '../common/locales';

const { locales, defaultLang } = config.site;
setDefaultLang(defaultLang);

export function getLangFromRoute(route: any) {
  const lang = route.path.split('/')[1];
  const langs = Object.keys(locales);

  if (langs.indexOf(lang) !== -1) {
    return lang;
  }

  return getLang();
}

const DemoHome = lazy(() => import('./components/home/DemoHome.tsx'));
const DemoNav = lazy(() => import('./components/DemoNav.tsx'));

function getRoutes() {
  const routes: any = [];
  const names = Object.keys(demos);
  const langs = locales ? Object.keys(locales) : [];

  names.forEach((name) => {
    const component = decamelize(name);
    const LazyComponent = lazy(demos[name]);
    const DemoComponent = (props: any) => (
      <>
        <DemoNav name={props.name} lang={props.lang}></DemoNav>
        <LazyComponent name={props.name} lang={props.lang}></LazyComponent>
      </>
    );
    if (langs.length) {
      langs.forEach((lang) => {
        routes.push({
          path: `${lang}/${component}`,
          element: <DemoComponent name={name} lang={lang}></DemoComponent>,
        });
      });
    } else {
      routes.push({
        path: `/${component}`,
        element: <DemoComponent name={name}></DemoComponent>,
      });
    }
  });

  if (langs.length) {
    langs.forEach((lang) => {
      routes.push({
        path: `/${lang}/*`,
        element: <DemoHome lang={lang} />,
      });

      routes.push({
        path: `/${lang}`,
        loader: () => {
          lang;
        },
        element: <DemoHome lang={lang} />,
      });
    });
  } else {
    routes.push({
      path: `*`,
      element: <DemoHome />,
    });
    routes.push({
      path: '/',
      element: <DemoHome />,
    });
  }
  return routes;
}
export const routesConfig = getRoutes();
