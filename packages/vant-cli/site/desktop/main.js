import { createApp } from 'vue';
import { packageEntry } from 'site-desktop-shared';
import App from './App';
import { router } from './router';

window.app = createApp(App).use(router).use(packageEntry).mount('#app');
