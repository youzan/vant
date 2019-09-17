const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');

const isMinify = process.argv.indexOf('-p') !== -1;

module.exports = merge(config, {
  mode: 'production',
  entry: {
    vant: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'vant',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    // https://github.com/webpack/webpack/issues/6522
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
});
