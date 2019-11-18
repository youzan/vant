import { join } from 'path';
import merge from 'webpack-merge';
import config from './webpack.site.dev';

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: join(__dirname, '../../site/dist'),
    publicPath: 'https://b.yzcdn.cn/vant/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});

export default module.exports;
