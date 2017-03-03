const path = require('path');
const to2 = require('2webpack2');
// const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getPostcssPlugin = require('../../build/utils/postcss_pipe');

let webpackConfig = {
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [
    new ProgressBarPlugin()
  ],
  postcss: getPostcssPlugin,
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.vue'
    ],
    alias: {
      src: path.resolve(process.cwd(), 'src'),
      packages: path.resolve(process.cwd(), 'packages'),
      examples: path.resolve(process.cwd(), 'examples'),
      vue$: 'vue/dist/vue.common.js'
    }
  },
  resolveLoader: {},
  module: {
    loaders: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: path.resolve(process.cwd()),
        exclude: /node_modules|utils\/popper\.js|utils\/date.\js/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader?minimize=false'
        ]
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loaders: [
          'vue-loader'
        ]
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'isparta',
        exclude: /node_modules|utils\/popper\.js|utils\/date.\js/,
        include: /src|packages/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint-loader'
      }
    ],
    postLoaders: []
  },
  devtool: '#inline-source-map',
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader?sourceMap',
      less: 'vue-style-loader!css-loader?sourceMap!less-loader?sourceMap',
      sass: 'vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap',
      scss: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap',
      stylus: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap',
      styl: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap',
      js: 'isparta-loader!eslint-loader'
    },
    preserveWhitespace: false
  },
  eslint: {
    emitWarning: true
  }
};

module.exports = to2(webpackConfig, {quiet: true, context: true});
