const webpack = require('webpack');
const config = require('./webpack.config.dev.js');
const isMinify = process.argv.indexOf('-p') !== -1; 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.entry = {
  'vant': './packages/index.js'
};

config.output = {
  filename: isMinify ? './lib/[name].min.js' : './lib/[name].js',
  library: 'vant',
  libraryTarget: 'umd',
  umdNamedDefine: true
};

config.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
      vue: {
        autoprefixer: false,
        preserveWhitespace: false
      }
    }
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

// analyze bundle size if need
// if (isMinify) {
//   config.plugins.push(new BundleAnalyzerPlugin());
// }

delete config.devtool;

module.exports = config;
