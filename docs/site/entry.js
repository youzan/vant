import { initDemoLocale } from './demo-locale';
import Lazyload from '../../src/lazyload';

initDemoLocale();

const { app } = window;
if (app) {
  app.use(Lazyload, {
    lazyComponent: true,
  });
}
