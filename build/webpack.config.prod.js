const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const devConfig = require('./webpack.config.dev.js');

module.exports = merge(devConfig, {
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'https://b.yzcdn.cn/zanui/vue/',
    filename: '[name].[hash:8].js',
    umdNamedDefine: true,
    chunkFilename: 'async_[name].[chunkhash:8].js'
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
});
