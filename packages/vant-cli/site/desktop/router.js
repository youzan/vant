import { documents } from '../../dist/desktop-config';

const routes = [];
const names = Object.keys(documents);

Object.keys(documents).forEach((name, index) => {
  if (index === 0) {
    routes.push({
      path: '*',
      redirect: () => `/${names[0]}`
    });
  }

  routes.push({
    name,
    component: documents[name],
    path: `/${name}`,
    meta: {
      name
    }
  });
});

export default routes;
