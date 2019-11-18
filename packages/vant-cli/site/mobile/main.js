import Vue from 'vue';
import VueRouter from 'vue-router';
import DemoBlock from './components/DemoBlock';
import DemoSection from './components/DemoSection';
import routes from './router';
import App from './App';
import '@vant/touch-emulator';
import '../common/iframe-router';

Vue.use(VueRouter);
Vue.component(DemoBlock.name, DemoBlock);
Vue.component(DemoSection.name, DemoSection);

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 }
});

router.afterEach(() => {
  Vue.nextTick(window.syncPath);
});

window.vueRouter = router;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
