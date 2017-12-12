import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router.config';
import Vant, { Lazyload } from 'packages';
import VantDoc from 'vant-doc';
import 'packages/vant-css/src/index.css';
import 'packages/vant-css/src/icon-local.css';
import 'vant-doc/src/helper/touch-simulator';

Vue.use(Vant);
Vue.use(VantDoc);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(VueRouter);

const routesConfig = routes(true);
const router = new VueRouter({
  mode: 'hash',
  base: '/zanui/vant/examples',
  routes: routesConfig
});

window.vueRouter = router;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app-container'
});
