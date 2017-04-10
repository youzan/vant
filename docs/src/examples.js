import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './ExamplesApp';
import navConfig from './nav.config.js';
import routes from './router.config';
import ZanUI from '../src/index';

import 'packages/zanui-css/src/index.css';

import DemoList from './components/demo-list.vue';

Vue.use(ZanUI);
Vue.use(ZanUI.Lazyload, {
  lazyComponent: true
});
Vue.use(VueRouter);

let routesConfig = routes(navConfig, true);
routesConfig.push({
  path: '/',
  component: DemoList.default || DemoList
});
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routesConfig
});

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
