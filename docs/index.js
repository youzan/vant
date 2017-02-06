import './assets/docs.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router.config';
import demoBlock from './components/demo-block';
import SideNav from './components/side-nav';
import Oxygen from '../src/index';

Vue.use(Oxygen);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('side-nav', SideNav);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
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
