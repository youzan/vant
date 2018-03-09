import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router';
import Vant, { Lazyload } from 'packages';
import VantDoc from 'vant-doc';
import 'packages/vant-css/src/index.css';
import 'vant-doc/src/helper/touch-simulator';
import './components/nprogress.css';

Vue
  .use(Vant)
  .use(VantDoc)
  .use(VueRouter)
  .use(Lazyload, {
    lazyComponent: true
  });

const router = new VueRouter({
  mode: 'hash',
  base: '/zanui/vant/examples',
  routes: routes(true)
});

router.afterEach(() => {
  if (router.currentRoute.name) {
    window.scrollTo(0, 0);
  }
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

window.vueRouter = router;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});
