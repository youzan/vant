import { merge } from 'webpack-merge';
import { get } from 'lodash';
import { WebpackConfig } from '../common/types';
import { getVantConfig, getWebpackConfig } from '../common';
import { getSiteDevBaseConfig } from './webpack.site.dev';
import { SITE_DIST_DIR } from '../common/constant';

const vantConfig = getVantConfig();
const outputDir = get(vantConfig, 'build.site.outputDir', SITE_DIST_DIR);
const publicPath = get(vantConfig, 'build.site.publicPath', '/');

export function getSitePrdConfig(): WebpackConfig {
  return getWebpackConfig(
    merge(getSiteDevBaseConfig(), {
      mode: 'production',
      stats: 'none',
      performance: {
        maxAssetSize: 5 * 1024 * 1024,
        maxEntrypointSize: 5 * 1024 * 1024,
      },
      output: {
        publicPath,
        path: outputDir,
        filename: '[name].[hash:8].js',
        chunkFilename: 'async_[name].[chunkhash:8].js',
      },
    })
  );
}
