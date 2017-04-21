var path = require('path');
var Components = require('../components.json');
var config = require('./webpack.build.js');

delete config.devtool;

config.entry = Components;

config.externals = {
  vue: 'Vue'
};

config.output = {
  path: path.join(__dirname, '../lib'),
  filename: '[name].js',
  libraryTarget: 'umd'
};

module.exports = config;
