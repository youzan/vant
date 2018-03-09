const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const devConfig = require('./webpack.config.dev.js');

module.exports = merge(devConfig, {
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'https://img.yzcdn.cn/zanui/vant/',
    filename: '[name].[hash:8].js',
    umdNamedDefine: true,
    chunkFilename: 'async_[name].[chunkhash:8].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
});
