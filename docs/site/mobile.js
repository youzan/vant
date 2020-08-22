import { DemoLocaleMixin } from './demo-locale';
// import Lazyload from '../../src/lazyload';

// TODO
// Vue.use(Lazyload, {
//   lazyComponent: true,
// });

const { app } = window;
if (app) {
  // helper for demo locales
  app.mixin(DemoLocaleMixin);
}
