import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// @ts-ignore
import WebpackBar from 'webpackbar';
import { join } from 'path';
import { baseConfig } from './webpack.base';
import { getVantConfig, getWebpackConfig } from '../common';
import { VantCliSitePlugin } from '../compiler/vant-cli-site-plugin';
import {
  SITE_MODILE_SHARED_FILE,
  SITE_DESKTOP_SHARED_FILE
} from '../common/constant';

function getSiteConfig() {
  const siteConfig = getVantConfig().site;

  if (siteConfig.locales) {
    return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
  }

  return siteConfig;
}

function getTitle(config: { title: string, description?: string }) {
  let { title } = config;

  if (config.description) {
    title += ` - ${config.description}`;
  }

  return title;
}

const siteConfig = getSiteConfig();
const title = getTitle(siteConfig);

export const siteDevBaseConfig = merge(baseConfig as any, {
  entry: {
    'site-desktop': [join(__dirname, '../../site/desktop/main.js')],
    'site-mobile': [join(__dirname, '../../site/mobile/main.js')]
  },
  devServer: {
    quiet: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    publicPath: '/',
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
    new WebpackBar({
      name: 'Vant Cli',
      color: '#07c160'
    }),
    new VantCliSitePlugin(),
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
