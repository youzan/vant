import decamelize from 'decamelize';
import { documents } from 'site-desktop-shared';

const routes = [];
const names = Object.keys(documents);

routes.push({
  path: '/home',
  component: documents.Home
});

routes.push({
  path: '*',
  redirect: '/home'
});

names.forEach(name => {
  routes.push({
    name,
    component: documents[name],
    path: `/${decamelize(name, '-')}`,
    meta: {
      name
    }
  });
});

export { routes };
