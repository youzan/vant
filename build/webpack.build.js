const webpack = require('webpack');
const config = require('./webpack.config.dev.js');
const isMinify = process.argv.indexOf('-p') !== -1;

module.exports = Object.assign({}, config, {
  entry: {
    'vant': './packages/index.js'
  },
  output: {
    filename: isMinify ? './lib/[name].min.js' : './lib/[name].js',
    library: 'vant',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});
