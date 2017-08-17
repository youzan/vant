import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './ExamplesApp';
import routes from './router.config';
import ZanUI from 'packages/index';
import ZanDoc from 'zan-doc';
import 'packages/vant-css/src/index.css';

import DemoList from './components/demo-list.vue';

Vue.use(ZanUI);
Vue.use(ZanDoc);
Vue.use(ZanUI.Lazyload, {
  lazyComponent: true
});
Vue.use(VueRouter);

const routesConfig = routes(true);
routesConfig.push({
  path: '/',
  component: DemoList.default || DemoList
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
  next()
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
