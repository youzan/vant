import type Webpack from 'webpack';

export type WebpackConfig = Webpack.Configuration & {
  devServer?: any;
};
