require('babel-polyfill');

require('babel-core/register')({
  presets: [require('babel-preset-env')]
});

const getWebpackConfig = require('./get-webpack-conf');

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack'],
      'test/!(components)/**/*.vue': ['coverage']
    },
    webpack: getWebpackConfig(getTestFileName()),
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    singleRun: false
  });
};

function getTestFileName() {
  const flagIndex = process.argv.indexOf('--file');
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : '';
}
