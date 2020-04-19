import sass from 'sass';
import FriendlyErrorsPlugin from '@nuxt/friendly-errors-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import {
  CACHE_DIR,
  STYLE_EXTS,
  SCRIPT_EXTS,
  POSTCSS_CONFIG_FILE,
} from '../common/constant';

const CACHE_LOADER = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: CACHE_DIR,
  },
};

const CSS_LOADERS = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: POSTCSS_CONFIG_FILE,
      },
    },
  },
];

export const baseConfig = {
  mode: 'development',
  resolve: {
    extensions: [...SCRIPT_EXTS, ...STYLE_EXTS],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          CACHE_LOADER,
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules\/(?!(@vant\/cli))/,
        use: [CACHE_LOADER, 'babel-loader'],
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: CSS_LOADERS,
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [...CSS_LOADERS, 'less-loader'],
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          ...CSS_LOADERS,
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [CACHE_LOADER, 'vue-loader', '@vant/markdown-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin({
      clearConsole: false,
      logLevel: 'WARNING',
    }),
  ],
};
