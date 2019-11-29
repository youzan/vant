import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { getPort } from 'portfinder';
import { buildESModuleOutputs } from '../commands/build';
import { genPackageEntry } from './gen-package-entry';
import { genPacakgeStyle } from './gen-package-style';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';
import { genStyleDepsMap } from './gen-style-deps-map';
import { siteDevConfig } from '../config/webpack.site.dev';
import { sitePrdConfig } from '../config/webpack.site.prd';

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
  await buildESModuleOutputs();
  genStyleDepsMap();
  genPackageEntry();
  genPacakgeStyle();
  genSiteMobileShared();
  genSiteDesktopShared();

  if (production) {
    await build();
  } else {
    watch();
  }
}
