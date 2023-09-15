import Vue from 'vue';
import App from './App';
import { router } from './router';
import { scrollToAnchor } from './utils';
import DemoPlayground from './components/DemoPlayground';

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

Vue.component(DemoPlayground.name, DemoPlayground);

setTimeout(() => {
  new Vue({
    el: '#app',
    mounted() {
      if (this.$route.hash) {
        scrollToAnchor(this.$route.hash);
      }
    },
    render: (h) => h(App),
    router,
  });
}, 0);
