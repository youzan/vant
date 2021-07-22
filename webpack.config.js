const { join } = require('path');

module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    devtool: false,
    entry: {
      'site-mobile': ['./docs/site/entry'],
      'site-desktop': ['./docs/site/entry'],
    },
    resolve: {
      alias: {
        '@demo': join(__dirname, 'docs', 'site'),
      },
    },
  };
};
