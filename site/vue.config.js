const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vant/' : '/',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/desktop/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    mobile: {
      entry: 'src/mobile/main.js',
      template: 'public/mobile.html',
      filename: 'mobile.html'
    }
  },
  chainWebpack: config => config.resolve.extensions.prepend('.md'),
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ['vue-loader', '@vant/markdown-loader']
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        paths: [path.resolve(__dirname, '../node_modules')]
      }
    }
  }
};
