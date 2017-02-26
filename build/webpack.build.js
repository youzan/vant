var config = require('./webpack.config.js');

config.entry = {
  'zanui': './src/index.js'
};

config.output = {
  filename: './lib/[name].js',
  library: 'zanui',
  libraryTarget: 'umd'
};

module.exports = config;
