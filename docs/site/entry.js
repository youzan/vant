import './demo-locale';
import Lazyload from '../../src/lazyload';

const { app } = window;
if (app) {
  app.use(Lazyload, {
    lazyComponent: true,
  });
}
