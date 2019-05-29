import Vue from 'vue';
import VueRouter from 'vue-router';
import VantDoc from '@vant/doc';
import App from './DocsApp';
import routes from './router';
import { isMobile } from './utils';

Vue.use(VueRouter).use(VantDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    location.replace('mobile.html' + location.hash);
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
