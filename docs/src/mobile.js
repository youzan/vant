import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router';
import '../../packages/vant-css/src/index.css';
import '../../packages/vant-css/src/icon-local.css';
import 'vant-doc/src/helper/touch-simulator';
import './components/nprogress.css';

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

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});
