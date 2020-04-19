import { createApp } from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { router } from './router';
import { scrollToAnchor } from './utils';

const app = createApp({
  el: '#app',
  mounted() {
    if (this.$route.hash) {
      scrollToAnchor(this.$route.hash);
    }
  },
  render: (h) => h(App),
  router,
});

app.use(VueRouter);
