import Vue from 'vue';
import VueRouter from 'vue-router';
import VantDoc from '@vant/doc';
import App from './DocsApp';
import routes from './router';
import { isMobile, importAll } from './utils';

if (isMobile) {
  location.replace('mobile.html' + location.hash);
}

Vue.use(VueRouter).use(VantDoc);

const docs = {};
const docsFromMarkdown = require.context('../markdown', false, /(en-US|zh-CN)\.md$/);
const docsFromPackages = require.context('../../packages', true, /(en-US|zh-CN)\.md$/);

importAll(docs, docsFromMarkdown);
importAll(docs, docsFromPackages);

const router = new VueRouter({
  mode: 'hash',
  routes: routes({ componentMap: docs })
});

router.afterEach(() => {
  window.scrollTo(0, 0);
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
