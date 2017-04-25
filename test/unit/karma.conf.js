require('babel-polyfill');

require('babel-core/register')({
  presets: [require('babel-preset-es2015')]
});

var webpackConfig = require('./get-webpack-conf');
var travis = process.env.TRAVIS;

module.exports = function(config) {
  config.set({
    browsers: travis ? ['PhantomJS'] : ['Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
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
