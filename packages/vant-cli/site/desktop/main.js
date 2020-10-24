import { createApp } from 'vue';
import App from './App';
import { router } from './router';

window.app = createApp(App).use(router).mount('#app');
