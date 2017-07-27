const navs = require('./doc.config')['zh-CN'].nav;

const registerRoute = (isExample) => {
  let route = [];
  navs.forEach(nav => {
    if (isExample && !nav.showInMobile) {
      return;
    }

    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    const component = isExample
      ? require(`../examples-dist${page.path}.vue`)
      : require(`../examples-docs${page.path}.md`);
    route.push({
      path: '/component' + page.path,
      component: component.default || component
    });
  }

  // console.log(route);

  return route;
};

export default registerRoute;
