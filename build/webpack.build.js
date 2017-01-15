var config = require('./webpack.config.js')

config.entry = {
  'oxygen': './src/index.js'
}

config.output = {
  filename: './dist/[name].js',
  library: 'Oxygen',
  libraryTarget: 'umd'
}

module.exports = config
