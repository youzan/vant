const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'vant-docs': './docs/src/index.js',
    'vant-mobile': './docs/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    stats: 'errors-only',
    historyApiFallback: {
      rewrites: [
        { from: /^\/zanui\/vant\/examples/, to: '/examples.html' },
        { from: /^\/zanui\/vant/, to: '/index.html' }
      ]
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js',
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.md/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'vant-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'vant-mobile'],
      template: 'docs/src/index.tpl',
      filename: 'examples.html',
      inject: true
    })
  ]
};
