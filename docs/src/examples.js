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
router.beforeEach((to, from, next) => {
  const container = document.querySelector('.examples-container');
  if (container) {
    document.querySelector('.examples-container').scrollTop = 0;
  }
  next();
});

router.afterEach(() => {
  window.syncPath();
});

window.vueRouter = router;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
