import Vue from 'vue';
import App from './App';
import { router } from './router';
import { scrollToAnchor } from './utils';

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  mounted() {
    if (this.$route.hash) {
      scrollToAnchor(this.$route.hash);
    }
  },
  render: h => h(App),
  router,
});
