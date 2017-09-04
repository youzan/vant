const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const docConfig = require('../docs/src/doc.config');
const { extractExample } = require('zan-doc/src/helper');
const styleLoaders = [
  { loader: 'css-loader' },
  { loader: 'postcss-loader', options: { sourceMap: true } }
];

// extract [components].vue from [components].md
extractExample({
  src: path.resolve(__dirname, '../docs/examples-docs'),
  dist: path.resolve(__dirname, '../docs/examples-dist'),
  nav: docConfig['zh-CN'].nav,
  watch: !isProduction
});

module.exports = {
  entry: {
    vendor: ['packages'],
    'vant-docs': './docs/src/index.js',
    'vant-examples': './docs/src/examples.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    filename: '[name].js',
    umdNamedDefine: true,
    chunkFilename: 'async.[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [
        { from: /^\/zanui\/vue\/examples/, to: '/examples.html' },
        { from: /^\/zanui\/vue/, to: '/index.html' }
      ]
    },
    stats: 'errors-only'
  },
  resolve: {
    modules: [path.join(__dirname, '../node_modules'), 'node_modules'],
    extensions: ['.js', '.vue', '.css'],
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js',
      packages: path.join(__dirname, '../packages'),
      lib: path.join(__dirname, '../lib'),
      components: path.join(__dirname, '../docs/src/components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              preserveWhitespace: false,
              loaders: {
                postcss: ExtractTextPlugin.extract({
                  use: styleLoaders,
                  fallback: 'vue-style-loader'
                }),
                css: ExtractTextPlugin.extract({
                  use: styleLoaders,
                  fallback: 'vue-style-loader'
                })
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue-router\/|vue-loader\//,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: styleLoaders })
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          use: [[require('markdown-it-container'), 'demo']],
          preprocess(MarkdownIt, source) {
            const styleRegexp = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/i;
            const scriptRegexp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i;
            MarkdownIt.renderer.rules.table_open = () =>
              '<table class="zan-doc-table">';
            return source.replace(styleRegexp, '').replace(scriptRegexp, '');
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'vant-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'vant-examples'],
      template: 'docs/src/index.tpl',
      filename: 'examples.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      filename: isProduction ? 'vendor.[hash:8].js' : 'vendor.js'
    }),
    new OptimizeCssAssetsPlugin(),
    new ExtractTextPlugin({
      filename: isProduction ? '[name].[hash:8].css' : '[name].css',
      allChunks: true
    }),
    new FriendlyErrorsPlugin()
  ]
};
