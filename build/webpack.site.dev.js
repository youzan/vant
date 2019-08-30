const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  entry: {
    'vant-docs': './docs/site/desktop/main.js',
    'vant-mobile': './docs/site/mobile/main.js'
  },
  devServer: {
    open: true,
    progress: true,
    host: '0.0.0.0',
    stats: 'errors-only'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
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
      chunks: ['chunks', 'vant-docs'],
      template: path.join(__dirname, '../docs/site/desktop/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'vant-mobile'],
      template: path.join(__dirname, '../docs/site/mobile/index.html'),
      filename: 'mobile.html'
    })
  ]
});
