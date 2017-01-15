import Sample from '../packages/sample/index.js';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Sample.name, Sample);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1',
  Sample
};
