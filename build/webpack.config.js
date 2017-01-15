var webpack = require('webpack')
var path = require('path')
var slugify = require('transliteration').slugify
var md = require('markdown-it')()
var striptags = require('./strip-tags')

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
    'build-docs': './docs/index.js'
  },
  output: {
    path: './docs/build',
    publicPath: 'docs/build',
    filename: '[name].js'
  },
  resolve: {
    root: path.resolve('./'),
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?root=./docs/'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
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
            var script = striptags.fetch(content, 'script');
            var style = striptags.fetch(content, 'style');
            var descriptionHTML = description
              ? md.render(description)
              : '';

            return `<demo-block class="demo-box">
                      <div class="source" slot="source">${html}</div>
                      ${descriptionHTML}
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
  },
  devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}