const registerRoute = (navConfig, isExample) => {
  let route = [];
  let navs = navConfig['zh-CN'];
  navs.forEach(nav => {
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
    route.push({
      path: '/component' + page.path,
      component: function(resolve) {
        require([isExample ? `./examples${page.path}.vue` : `./examples-docs${page.path}.md`], resolve);
      }
    });
  }

  // console.log(route);

  return route;
};

export default registerRoute;
