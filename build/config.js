var Components = require('../components.json');
var path = require('path');
var dependencies = require('../package.json').dependencies;
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`oxygen/packages/${key}/index.js`] = `oxygen/lib/${key}`;
  externals[`oxygen/packages/${key}/style.css`] = `oxygen/lib/${key}/style.css`;
});
Object.keys(dependencies).forEach(function(key) {
  externals[key] = key;
});
exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals);

exports.alias = {
  'oxygen': path.join(__dirname, '..'),
  'src': path.join(__dirname, '../src')
};

exports.jsexclude = /node_modules|lib/;

exports.extends = ['vue2', 'buble'];

