import type Webpack from 'webpack';
import type WebpackDevServer from 'webpack-dev-server';

export type WebpackConfig = Webpack.Configuration & {
  devServer?: WebpackDevServer.Configuration;
};
