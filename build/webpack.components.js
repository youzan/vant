var path = require('path');
var Components = require('../components.json');
var config = require('./webpack.build.js');

delete config.devtool;

config.entry = Components;

config.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};

config.output = {
  path: path.join(__dirname, '../lib'),
  filename: '[name].js',
  libraryTarget: 'umd'
};

module.exports = config;
