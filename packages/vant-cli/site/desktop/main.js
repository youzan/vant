import { createApp } from 'vue';
import App from './App.vue';
import DemoPlayground from './components/DemoPlayground.vue';
import { router } from './router';

window.app = createApp(App)
  .use(router)
  .component(DemoPlayground.name, DemoPlayground);

setTimeout(() => {
  window.app.mount('#app');
}, 0);
