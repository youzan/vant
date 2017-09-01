const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function getWebpackConfig(testFileName) {
  return {
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/dist/',
      filename: '[name].js',
      chunkFilename: '[id].js',
      libraryTarget: 'umd'
    },
    plugins: [
      new ProgressBarPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
          babel: {
            presets: ['env'],
            plugins: ['transform-runtime', 'transform-vue-jsx']
          },
          vue: {
            autoprefixer: false,
            preserveWhitespace: false
          }
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          TEST_FILE: `"${testFileName}"`
        }
      })
    ],
    stats: 'errors-only',
    resolve: {
      modules: [path.resolve(process.cwd(), 'node_modules'), 'node_modules'],
      extensions: ['.js', '.json', '.vue', '.css'],
      alias: {
        src: path.resolve(process.cwd(), 'src'),
        packages: path.resolve(process.cwd(), 'packages'),
        examples: path.resolve(process.cwd(), 'examples'),
        vue$: 'vue/dist/vue.common.js'
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules|vue-router\/|vue-loader\/|docs|test|src\/index|src\/utils|src\/mixins|packages\/swipe/,
          use: ['isparta-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules|vue-router\/|vue-loader\//,
          use: ['babel-loader']
        },
        {
          test: /\.(css|pcss)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(gif|png|jpe?g)(\?\S*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                query: {
                  limit: 10000,
                  name: 'static/[name].[hash:7].[ext]'
                }
              }
            }
          ]
        },
        {
          test: /test\/unit\/components\/.*\.vue$|packages\/swipe\/.*\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                loaders: {
                  css: ['style-loader', 'css-loader', 'postcss-loader']
                }
              }
            }
          ]
        },
        {
          test: /packages\/.*\.vue$/,
          exclude: /packages\/swipe\/.*\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                loaders: {
                  css: ['style-loader', 'css-loader', 'postcss-loader'],
                  js: ['isparta-loader']
                }
              }
            }
          ]
        }
      ]
    },
    devtool: '#inline-source-map'
  };
}

module.exports = getWebpackConfig;
