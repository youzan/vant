import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';
import { baseConfig } from './webpack.base';
import { getWebpackConfig } from '../common';
import {
  CONFIG,
  SITE_MODILE_SHARED_FILE,
  SITE_DESKTOP_SHARED_FILE
} from '../common/constant';

const siteConfig = CONFIG.site;
const title = `${siteConfig.title} - ${siteConfig.description}`;

export const siteDevBaseConfig = merge(baseConfig as any, {
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
      'site-mobile-shared': SITE_MODILE_SHARED_FILE,
      'site-desktop-shared': SITE_DESKTOP_SHARED_FILE
    }
  },
  output: {
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
});

export const siteDevConfig = merge(siteDevBaseConfig, getWebpackConfig());
