var cooking = require('cooking');
var path = require('path');
var config = require('../../build/config');

cooking.set({
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'OxygenCell',
  extractCSS: 'style.css',
  extends: config.extends,
  alias: config.alias,
  externals: config.externals
});

module.exports = cooking.resolve();
