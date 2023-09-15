import { merge } from 'webpack-merge';
import { join } from 'path';
import { baseConfig } from './webpack.base';
import { WebpackConfig } from '../common/types';
import { getVantConfig, getWebpackConfig, setBuildTarget } from '../common';
import { LIB_DIR, ES_DIR } from '../common/constant';

export function getPackageConfig(isMinify: boolean): WebpackConfig {
  const { name } = getVantConfig();

  setBuildTarget('package');

  return getWebpackConfig(
    merge(baseConfig as any, {
      mode: 'production',
      entry: {
        [name]: join(ES_DIR, 'index.js'),
      },
      stats: 'none',
      output: {
        path: LIB_DIR,
        library: name,
        libraryTarget: 'umd',
        filename: isMinify ? '[name].min.js' : '[name].js',
        umdNamedDefine: true,
        // https://github.com/webpack/webpack/issues/6522
        globalObject: "(typeof self !== 'undefined' ? self : this)",
      },
      externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue',
        },
      },
      performance: false,
      optimization: {
        minimize: isMinify,
      },
    })
  );
}
