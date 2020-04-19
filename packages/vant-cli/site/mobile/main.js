import { createApp } from 'vue';
import DemoBlock from './components/DemoBlock';
import DemoSection from './components/DemoSection';
import { router } from './router';
import App from './App';
import '@vant/touch-emulator';

setTimeout(() => {
  createApp(App)
    .use(router)
    .component(DemoBlock.name, DemoBlock)
    .component(DemoSection.name, DemoSection)
    .mount('#app');
}, 0);
