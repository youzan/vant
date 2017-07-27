const path = require('path');
const Components = require('../components.json');
const config = require('./webpack.build.js');
const webpack = require('webpack');

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
  libraryTarget: 'umd',
  umdNamedDefine: true
};

module.exports = config;
