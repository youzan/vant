import { createApp } from 'vue';
import App from './App.vue';
import DemoPlayground from './components/DemoPlayground.vue';
import { router } from './router';

const app = createApp(App)
  .use(router)
  .component(DemoPlayground.name, DemoPlayground);

setTimeout(() => {
  app.mount('#app');
}, 0);
