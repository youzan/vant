const path = require('path');
const devConfig = require('./webpack.dev.js');

module.exports = Object.assign({}, devConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'https://img.yzcdn.cn/zanui/vant/',
    filename: '[name].[hash:8].js',
    umdNamedDefine: true,
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});
