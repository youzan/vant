var webpack = require('webpack');
var path = require('path');
var slugify = require('transliteration').slugify;
var md = require('markdown-it')();
var striptags = require('./strip-tags');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var version = require('../package.json').version;
var getPoastcssPlugin = require('./utils/postcss_pipe');

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
    'zanui-docs': './docs/index.js',
    'zanui-examples': './docs/examples.js'
  },
  output: {
    path: './docs/build/',
    publicPath: 'docs/build/',
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules'),
      'node_modules'
    ],
    extensions: ['.js', '.vue', '.pcss'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.common.js',
      'zanui': path.join(__dirname, '..'),
      'src': path.join(__dirname, '../src'),
      'packages': path.join(__dirname, '../packages')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
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
  devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin(`yzvue_base_${version}_min.css`),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ];
} else {
  // development 环境不会抽css - -
  module.exports.plugins = [
    new ExtractTextPlugin('style.dev.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: getPoastcssPlugin,
        babel: {
          presets: ['es2015'],
          plugins: ['transform-runtime', 'transform-vue-jsx']
        },
        eslint: {
          formatter: require('eslint-friendly-formatter')
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
    })
  ];
};
