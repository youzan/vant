import { createApp } from 'vue';
import VueRouter from 'vue-router';
import DemoBlock from './components/DemoBlock';
import DemoSection from './components/DemoSection';
import { router } from './router';
import App from './App';
import '@vant/touch-emulator';

setTimeout(() => {
  const app = createApp({
    render: (h) => h(App),
    router,
  });

  app.use(VueRouter);
  app.component(DemoBlock.name, DemoBlock);
  app.component(DemoSection.name, DemoSection);
  app.mount('#app');
}, 0);
