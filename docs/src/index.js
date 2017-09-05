import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './ExamplesDocsApp';
import routes from './router.config';
import ZanDoc from 'zan-doc';
import isMobile from './is-mobile';

Vue.use(VueRouter);
Vue.use(ZanDoc);

const routesConfig = routes();
routesConfig.push({
  path: '/',
  redirect: '/component/quickstart'
});

const router = new VueRouter({
  mode: 'history',
  base: '/zanui/vue/',
  routes: routesConfig
});

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    window.location.replace('/zanui/vue/examples');
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(() => {
  if (!isMobile) {
    window.scrollTo(0, 0);
  }
  window.syncPath();
});

window.vueRouter = router;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
