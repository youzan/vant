const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.dev.js');

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: {
    'vant': './packages/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'vant',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: []
});
