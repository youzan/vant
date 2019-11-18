import { demos } from '../../dist/mobile-config';

const routes = [];
const names = Object.keys(demos);

Object.keys(demos).forEach((name, index) => {
  if (index === 0) {
    routes.push({
      path: '*',
      redirect: () => `/${names[0]}`
    });
  }

  routes.push({
    name,
    component: demos[name],
    path: `/${name}`,
    meta: {
      name
    }
  });
});

export default routes;
