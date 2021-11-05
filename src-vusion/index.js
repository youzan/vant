import VConsole from 'vconsole';
// const axios = require('axios');

const vconsole = async () => {
  if (window && /defaulttenant\.dev\.qa-ci\.lcap\.group|vconsolee/.test(window.location.href)) {
    window.vconsolee = new VConsole();
  }
}

const addCloudUI = async () => {
  if (!(/h5/.test(location.href) && /designer/.test(location.href))) {
    return null
  }
  const STATIC_URL = window.top.appInfo.STATIC_URL;

  function loadScript(parentEl, src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        // external script
        script.setAttribute('src', src);
        script.addEventListener('load', () => resolve(0), false);
        // fix js load error block other js
        script.addEventListener('error', () => resolve(new Error('JS asset loaded error: ' + src)));
        parentEl.appendChild(script);
    });
  };
  function loadCSS(parentEl, src) {
    return new Promise((resolve, reject) => {
        const element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = src;
        element.addEventListener('error', () => reject(new Error('CSS asset loaded error: ' + src)), false);
        element.addEventListener('load', () => resolve(0), false);
        parentEl.appendChild(element);
    });
  };

  const res = await axios.get('/api/v1/assetdsl/simple/assetlist', {
    params: {
      platformVersion: 1,
      offset: 0,
      limit: 1000,
      type: 'baseComponentLibrary',
      tenantId: window.top.appInfo.tenantId,
    }
  });
  if (res.data && res.data.code === 200) {
    const result = res.data.result;
    const cloudui = result.rows.find((item) => item.symbol === 'cloud-ui.vusion');
    const cloudUiVersion = `${cloudui.curMajorVersion}.${cloudui.curMinorVersion}`;
    const ui = {
      js: `${STATIC_URL}/packages/cloud-ui.vusion@${cloudUiVersion}/dist-theme/index.js`,
      css: `${STATIC_URL}/packages/cloud-ui.vusion@${cloudUiVersion}/dist-theme/index.css`
    };
    await loadScript(document.body, ui.js);
    await loadCSS(document.head, ui.css);
  }
}
(async () => {
  try {
    // await vconsole();
    // await addCloudUI();
  } catch (e) {
    console.error(e)
  }
})();


export * from './components';

import * as utils from 'cloud-ui.vusion/src/utils';
export { utils };

export { install } from '@vusion/utils';

import Vue from 'vue';
Vue.prototype.$env = Vue.prototype.$env || {};
Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';

import '../src/style/base.less';
const requires = require.context('../src/', true, /\.less$/);
requires.keys().map((key) => requires(key));
// requires.keys().forEach((key) => {
//     const name = requires(key).default.name || key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
//     Vue.component(name, requires(key).default);
// });
