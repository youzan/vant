import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router.config';
import { setLang } from './utils/lang';
import Vant, { Lazyload } from 'packages';
import ZanDoc from 'zan-doc';
import 'packages/vant-css/src/index.css';
import 'zan-doc/src/helper/touch-simulator';

Vue.use(Vant);
Vue.use(ZanDoc);
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

router.afterEach((route) => {
  const container = document.querySelector('.examples-container');
  if (container) {
    document.querySelector('.examples-container').scrollTop = 0;
  }
  setLang(route.meta.lang);
});

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app-container'
});
