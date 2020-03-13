const path = require('path');

module.exports = {
  chainWebpack(config, isServer) {
    if (isServer) return;

    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('./card-wrapper')
      .loader(path.resolve(__dirname, './card-wrapper'))
      .before('markdown-loader');
  },
};
