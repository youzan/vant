var webpack = require('webpack');
var path = require('path');
var slugify = require('transliteration').slugify;
var md = require('markdown-it')();
var striptags = require('./strip-tags');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var version = require('../package.json').version;
var getPoastcssPlugin = require('./utils/postcss_pipe');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var StyleExtractPlugin;
if (process.env.NODE_ENV === 'production') {
  StyleExtractPlugin = new ExtractTextPlugin('[name].[hash:8].css');
} else {
  StyleExtractPlugin = new ExtractTextPlugin('[name].css');
}

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

module.exports = {
  entry: {
    'vendor': ['vue', 'vue-router'],
    'zan-docs': './docs/src/index.js',
    'zan-examples': './docs/src/examples.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules'),
      'node_modules'
    ],
    extensions: ['.js', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.common.js',
      'zanui': path.join(__dirname, '..'),
      'src': path.join(__dirname, '../src'),
      'packages': path.join(__dirname, '../packages'),
      'lib': path.join(__dirname, '../lib'),
      'components': path.join(__dirname, '../docs/src/components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader!postcss-loader',
                fallback: 'vue-style-loader'
              })
            }
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader'
        })
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader'
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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: getPoastcssPlugin,
        babel: {
          presets: ['es2015'],
          plugins: ['transform-runtime', 'transform-vue-jsx']
        },
        vue: {
          autoprefixer: false,
          postcss: getPoastcssPlugin
        },
        vueMarkdown: {
          use: [
            [require('markdown-it-anchor'), {
              level: 2,
              slugify: slugify,
              permalink: true,
              permalinkBefore: true
            }],
            [require('markdown-it-container'), 'demo', {
              validate: function(params) {
                return params.trim().match(/^demo\s*(.*)$/);
              },

              render: function(tokens, idx) {
                var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                if (tokens[idx].nesting === 1) {
                  var description = (m && m.length > 1) ? m[1] : '';
                  var content = tokens[idx + 1].content;
                  var html = convert(striptags.strip(content, ['script', 'style']));

                  return `<demo-block class="demo-box" description="${description}">
                            <div class="examples" slot="examples">${html}</div>
                            <div class="highlight" slot="highlight">`;
                }
                return '</div></demo-block>\n';
              }
            }]
          ],
          preprocess: function(MarkdownIt, source) {
            MarkdownIt.renderer.rules.table_open = function() {
              return '<table class="table">';
            };
            MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
            return source;
          }
        }
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'zan-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'zan-examples'],
      template: 'docs/src/index.tpl',
      filename: 'examples.html',
      inject: true
    }),
    new OptimizeCssAssetsPlugin(),
    StyleExtractPlugin
  ]
};

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.output = {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: './',
    filename: '[name].[hash:8].js'
  };
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]);
}
