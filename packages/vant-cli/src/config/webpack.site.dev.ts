import { join } from 'path';
import merge from 'webpack-merge';
import config from './webpack.base';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = merge(config, {
  entry: {
    'site-desktop': join(__dirname, '../../site/desktop/main.js'),
    'site-mobile': join(__dirname, '../../site/mobile/main.js')
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    disableHostCheck: true,
  },
  output: {
    path: join(__dirname, '../../site/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'chunks'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'site-desktop'],
      template: join(__dirname, '../../site/desktop/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'site-mobile'],
      template: join(__dirname, '../../site/mobile/index.html'),
      filename: 'mobile.html'
    })
  ]
});

export default module.exports;
