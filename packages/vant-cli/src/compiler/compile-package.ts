import webpack from 'webpack';
import { packageConfig } from '../config/webpack.package';

export async function compilePackage(isMinify: boolean) {
  return new Promise((resolve, reject) => {
    webpack(packageConfig(isMinify), (err, stats) => {
      if (err || stats.hasErrors()) {
        reject();
      } else {
        resolve();
      }
    });
  });
}
