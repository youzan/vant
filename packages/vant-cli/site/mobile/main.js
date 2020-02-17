import Vue from 'vue';
import DemoBlock from './components/DemoBlock';
import DemoSection from './components/DemoSection';
import { router } from './router';
import App from './App';
import '@vant/touch-emulator';

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

Vue.component(DemoBlock.name, DemoBlock);
Vue.component(DemoSection.name, DemoSection);

setTimeout(() => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router,
  });
}, 0);
