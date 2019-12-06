import Vue from 'vue';
import App from './App';
import { router } from './router';

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  mounted() {
    if (this.$route.hash) {
      // wait page init
      setTimeout(() => {
        const el = document.querySelector(this.$route.hash);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 1000);
    }
  },
  render: h => h(App),
  router
});
