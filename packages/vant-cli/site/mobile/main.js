import { createApp } from 'vue';
import DemoBlock from './components/DemoBlock.vue';
import DemoSection from './components/DemoSection.vue';
import { router } from './router';
import App from './App.vue';
import '@vant/touch-emulator';

const app = createApp(App)
  .use(router)
  .component(DemoBlock.name, DemoBlock)
  .component(DemoSection.name, DemoSection);

setTimeout(() => {
  app.mount('#app');
}, 0);

// https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490
document.addEventListener('touchstart', () => {}, {
  passive: true,
});
