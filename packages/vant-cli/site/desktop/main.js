import { createApp } from 'vue';
import { packageEntry } from 'site-desktop-shared';
import App from './App';
import DemoPlayground from './components/DemoPlayground';
import { router } from './router';

window.app = createApp(App)
  .use(router)
  .use(packageEntry)
  .component(DemoPlayground.name, DemoPlayground);

setTimeout(() => {
  window.app.mount('#app');
}, 0);
