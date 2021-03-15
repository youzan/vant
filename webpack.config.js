module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    entry: {
      'site-mobile': ['./docs/site/entry'],
      'site-desktop': ['./docs/site/entry'],
    },
  };
};
