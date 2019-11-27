import merge from 'webpack-merge';
import { baseConfig } from './webpack.base';
import { getWebpackConfig } from '../common';
import { LIB_DIR, CONFIG_FILE, PACKAGE_ENTRY_FILE } from '../common/constant';

// eslint-disable-next-line
const config = require(CONFIG_FILE);
const { name } = config;

export function packageConfig(isMinify: boolean) {
  return merge(
    baseConfig as any,
    {
      mode: 'production',
      entry: {
        [name]: PACKAGE_ENTRY_FILE
      },
      stats: 'none',
      output: {
        path: LIB_DIR,
        library: name,
        libraryTarget: 'umd',
        filename: isMinify ? '[name].min.js' : '[name].js',
        umdNamedDefine: true,
        // https://github.com/webpack/webpack/issues/6522
        globalObject: "typeof self !== 'undefined' ? self : this"
      },
      externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      },
      performance: false,
      optimization: {
        minimize: isMinify
      }
    },
    getWebpackConfig()
  );
}
