import { createApp } from 'vue';
import DemoBlock from './components/DemoBlock';
import DemoSection from './components/DemoSection';
import { router } from './router';
import { packageEntry } from 'site-mobile-shared';
import App from './App';
import '@vant/touch-emulator';

window.app = createApp(App)
  .use(router)
  .use(packageEntry)
  .component(DemoBlock.name, DemoBlock)
  .component(DemoSection.name, DemoSection);

setTimeout(() => {
  window.app.mount('#app');
}, 0);
