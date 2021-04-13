import sass from 'sass';
import webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import { join } from 'path';
import { consola } from '../common/logger';
import { existsSync } from 'fs';
import { WebpackConfig } from '../common/types';
import {
  CWD,
  STYLE_EXTS,
  SCRIPT_EXTS,
  POSTCSS_CONFIG_FILE,
} from '../common/constant';

const CSS_LOADERS = [
  require.resolve('style-loader'),
  require.resolve('css-loader'),
  {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: require(POSTCSS_CONFIG_FILE),
    },
  },
];

const VUE_LOADER = {
  loader: require.resolve('vue-loader'),
  options: {
    compilerOptions: {
      preserveWhitespace: false,
    },
  },
};

const plugins = [
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
  }),
  new VueLoaderPlugin(),
];

const tsconfigPath = join(CWD, 'tsconfig.json');
if (existsSync(tsconfigPath)) {
  const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
  plugins.push(
    new ForkTsCheckerPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: '@vue/compiler-sfc',
          },
        },
      },
      logger: {
        issues: {
          // skip info message
          log() {},
          warn(message: string) {
            consola.warn(message);
          },
          error(message: string) {
            consola.error(message);
          },
        },
      },
    })
  );
}

export const baseConfig: WebpackConfig = {
  mode: 'development',
  resolve: {
    extensions: [...SCRIPT_EXTS, ...STYLE_EXTS],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [VUE_LOADER],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules\/(?!(@vant\/cli))/,
        use: [require.resolve('babel-loader')],
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: CSS_LOADERS,
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [...CSS_LOADERS, require.resolve('less-loader')],
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          ...CSS_LOADERS,
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [VUE_LOADER, require.resolve('@vant/markdown-loader')],
      },
    ],
  },
  plugins,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};
