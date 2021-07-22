import { DemoLocaleMixin } from './demo-locale';
import Lazyload from '../../src/lazyload';

const { app } = window;
if (app) {
  // helper for demo locales
  app.mixin(DemoLocaleMixin);

  app.use(Lazyload, {
    lazyComponent: true,
  });
}
