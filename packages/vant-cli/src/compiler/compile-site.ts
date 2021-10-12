import chalk from 'chalk';
import { createServer, build } from 'vite';
import {
  getViteConfigForSiteDev,
  getViteConfigForSiteProd,
} from '../config/vite.site';
import { replaceExt } from '../common';
import { CSS_LANG } from '../common/css';
import { genPackageEntry } from './gen-package-entry';
import { genPackageStyle } from './gen-package-style';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';
import { genStyleDepsMap } from './gen-style-deps-map';
import { PACKAGE_ENTRY_FILE, PACKAGE_STYLE_FILE } from '../common/constant';

export async function genSiteEntry(): Promise<void> {
  return new Promise((resolve, reject) => {
    genStyleDepsMap()
      .then(() => {
        genPackageEntry({
          outputPath: PACKAGE_ENTRY_FILE,
        });
        genPackageStyle({
          outputPath: replaceExt(PACKAGE_STYLE_FILE, `.${CSS_LANG}`),
        });
        genSiteMobileShared();
        genSiteDesktopShared();
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export async function compileSite(production = false) {
  await genSiteEntry();
  if (production) {
    await build(getViteConfigForSiteProd());
  } else {
    const server = await createServer(getViteConfigForSiteDev());
    await server.listen();

    const { version } = require('vite/package.json');
    const viteInfo = chalk.cyan(`vite v${version}`);
    console.log(`\n  ${viteInfo}` + chalk.green(` dev server running at:\n`));
    server.printUrls();
  }
}
