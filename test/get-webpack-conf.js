const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpackDevConfig = require('../build/webpack.config.dev');

function getWebpackConfig(testFileName) {
  return {
    mode: 'development',
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/dist/',
      filename: '[name].js',
      chunkFilename: '[id].js',
      libraryTarget: 'umd'
    },
    resolve: webpackDevConfig.resolve,
    plugins: [
      new VueLoaderPlugin(),
      new ProgressBarPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          TEST_FILE: `"${testFileName}"`
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules|test|mock|swipe|locale|waterfall/,
          use: [
            {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            'babel-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.(css|postcss)$/,
          use: ['style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }]
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            }
          ]
        }
      ]
    }
  };
}

module.exports = getWebpackConfig;
