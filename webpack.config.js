module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    entry: {
      'site-desktop': ['./docs/site/desktop'],
      'site-mobile': ['./docs/site/mobile'],
    },
  };
};
