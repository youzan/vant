module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    devtool: false,
    entry: {
      'site-mobile': ['./docs/site/mobile'],
    },
  };
};
