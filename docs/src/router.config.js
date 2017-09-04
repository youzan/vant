import docConfig from './doc.config';
import componentDocs from '../examples-dist/entry-docs';
import componentDemos from '../examples-dist/entry-demos';
import './iframe-router';

const navs = docConfig['zh-CN'].nav;

const registerRoute = (isExample) => {
  const route = [{
    path: '*',
    redirect: '/'
  }];

  navs.forEach(nav => {
    if (isExample && !nav.showInMobile) {
      return;
    }

    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(addRoute);
      });
    } else if (nav.children) {
      nav.children.forEach(addRoute);
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    const { path } = page;
    if (path) {
      const name = path.replace('/', '');
      route.push({
        path: '/component' + path,
        component: isExample ? componentDemos[name] : componentDocs[name]
      });
    }
  }

  return route;
};

export default registerRoute;
