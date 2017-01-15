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

// init components
// for (let i in Oxygen) {
//   let module = Oxygen[i];
//   if (!module.ignoreInit) {
//     Vue.component(module.name, module);
//   }
// }

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

// router.beforeEach(function(transition) {
//   window.scrollTo(0, 0);
//   transition.next();
// });

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');
