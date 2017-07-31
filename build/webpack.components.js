const path = require('path');
const Components = require('../components.json');
const config = require('./webpack.build.js');
const webpack = require('webpack');

delete config.devtool;

const entry = {};
Object.keys(Components).forEach(key => {
  entry[key + '/index'] = Components[key];
});

config.entry = entry;

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
  libraryExport: "default",
  libraryTarget: 'umd'
};

module.exports = config;
