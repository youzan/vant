import decamelize from 'decamelize';
import DemoHome from './components/DemoHome';
import { demos } from 'mobile-entry';

const routes = [];
const names = Object.keys(demos);

routes.push({
  path: '/home',
  component: DemoHome
});

routes.push({
  path: '*',
  redirect: '/home'
});

names.forEach(name => {
  routes.push({
    name,
    component: demos[name],
    path: `/${decamelize(name, '-')}`,
    meta: {
      name
    }
  });
});

export { routes };
