import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { getPort } from 'portfinder';
import { getStepper } from '../common/logger';
import { genPackageEntry } from './gen-package-entry';
import { genPacakgeStyle } from './gen-package-style';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';
import { genStyleDepsMap } from './gen-style-deps-map';
import { siteDevConfig } from '../config/webpack.site.dev';
import { sitePrdConfig } from '../config/webpack.site.prd';

const stpper = getStepper(4);

function watch() {
  const server = new WebpackDevServer(
    webpack(siteDevConfig),
    (siteDevConfig as any).devServer
  );

  getPort(
    {
      port: 8080
    },
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }

      server.listen(port, 'localhost', (err?: Error) => {
        if (err) {
          console.log(err);
        }
      });
    }
  );
}

function build() {
  return new Promise((resolve, reject) => {
    webpack(sitePrdConfig, (err, stats) => {
      if (err || stats.hasErrors()) {
        reject();
      } else {
        resolve();
      }
    });
  });
}

export async function compileSite(production = false) {
  stpper.start('Prepare For Compilation');
  await genStyleDepsMap();
  genPackageEntry();
  genPacakgeStyle();
  genSiteMobileShared();
  genSiteDesktopShared();
  stpper.success('Prepare For Compilation');

  stpper.start('Build Documentation Site');
  if (production) {
    await build();
  } else {
    watch();
  }
  stpper.success('Build Documentation Site');
}
