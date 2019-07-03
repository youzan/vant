const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vant/' : '/',
  productionSourceMap: false,
  pages: {
    index: 'src/desktop/main.js',
    mobile: 'src/mobile/main.js'
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
