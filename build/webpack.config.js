const path = require('path');

const isMinify = process.argv.indexOf('-p') !== -1;

module.exports = {
  mode: 'production',
  entry: {
    vant: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'vant',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    minimize: isMinify
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
