import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './ExamplesApp';
import routes from './router.config';
import Vant, { Lazyload } from 'packages';
import ZanDoc from 'zan-doc';
import DemoList from './components/demo-list';
import 'packages/vant-css/src/index.css';
import 'zan-doc/src/helper/touch-simulator';

Vue.use(Vant);
Vue.use(ZanDoc);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(VueRouter);

const routesConfig = routes(true);
routesConfig.push({
  path: '/',
  component: DemoList
});
const router = new VueRouter({
  mode: 'history',
  base: '/zanui/vue/examples',
  routes: routesConfig
});

router.afterEach(() => {
  const container = document.querySelector('.examples-container');
  if (container) {
    document.querySelector('.examples-container').scrollTop = 0;
  }
  window.syncPath();
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
