require('babel-polyfill');

require('babel-core/register')({
  presets: [require('babel-preset-env')]
});

var getWebpackConfig = require('./get-webpack-conf');
var travis = process.env.TRAVIS;

module.exports = function(config) {
  config.set({
    browsers: travis ? ['PhantomJS'] : ['PhantomJS', 'Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
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
