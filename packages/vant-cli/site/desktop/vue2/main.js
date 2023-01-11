import Vue from 'vue';
import App from '../App.vue';
import DemoPlayground from '../components/DemoPlayground.vue';
import { router } from './router';

const app = new Vue({
  router,
  render: (h) => h(App),
});
Vue.component(DemoPlayground.name, DemoPlayground);

setTimeout(() => {
  app.$mount('#app');
}, 0);
