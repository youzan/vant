import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router';
import { isMobile } from '../common';
import '../common/iframe-router';

Vue.use(VueRouter);

if (isMobile) {
  location.replace('mobile.html' + location.hash);
}

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  }
});

router.afterEach(() => {
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
