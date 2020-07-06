module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    devtool: 'none',
    entry: {
      'site-mobile': ['./docs/site/mobile'],
    },
  };
};
