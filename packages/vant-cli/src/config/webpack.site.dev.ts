import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';
import { baseConfig } from './webpack.base';
import { CONFIG, MOBILE_ENTRY_FILE, DESKTOP_ENTRY_FILE } from '../common/constant';
import { getWebpackConfig } from '../common';

const siteConfig = CONFIG.site;
const title = `${siteConfig.title} - ${siteConfig.description}`;

export const siteDevConfig = merge(
  baseConfig as any,
  {
    entry: {
      'site-desktop': [join(__dirname, '../../site/desktop/main.js')],
      'site-mobile': [join(__dirname, '../../site/mobile/main.js')]
    },
    devServer: {
      open: true,
      host: '0.0.0.0',
      stats: 'errors-only',
      disableHostCheck: true
    },
    resolve: {
      alias: {
        'mobile-entry': MOBILE_ENTRY_FILE,
        'desktop-entry': DESKTOP_ENTRY_FILE
      }
    },
    output: {
      path: join(__dirname, '../../site/dist'),
      publicPath: '/',
      chunkFilename: 'async_[name].js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunks: {
            chunks: 'all',
            minChunks: 2,
            minSize: 0,
            name: 'chunks'
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        logo: siteConfig.logo,
        chunks: ['chunks', 'site-desktop'],
        template: join(__dirname, '../../site/desktop/index.html'),
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        title,
        logo: siteConfig.logo,
        chunks: ['chunks', 'site-mobile'],
        template: join(__dirname, '../../site/mobile/index.html'),
        filename: 'mobile.html'
      })
    ]
  },
  getWebpackConfig()
);
