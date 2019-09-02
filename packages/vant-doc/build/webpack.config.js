const path = require('path');
const baseWebpackConfig = require('../../../build/webpack.pkg');

module.exports = Object.assign(baseWebpackConfig, {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  }
});
