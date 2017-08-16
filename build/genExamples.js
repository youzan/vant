const path = require('path');
const docConfig = require('../docs/src/doc.config');
const { extractExample } = require('zan-doc/src/helper');

function extract(watch = false) {
  extractExample({
    src: path.resolve(__dirname, '../docs/examples-docs'),
    dist: path.resolve(__dirname, '../docs/examples-dist'),
    nav: docConfig['zh-CN'].nav,
    watch
  });
}

module.exports = function watch(isProduction) {
  extract(!isProduction);
};
