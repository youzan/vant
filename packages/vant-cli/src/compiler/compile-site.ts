import color from 'picocolors';
import { createRequire } from 'node:module';
import { createServer, build } from 'vite';
import {
  getViteConfigForSiteDev,
  getViteConfigForSiteProd,
} from '../config/vite.site.js';
import { mergeCustomViteConfig } from '../common/index.js';
import { genPackageEntry } from './gen-package-entry.js';
import { genStyleDepsMap } from './gen-style-deps-map.js';
import { PACKAGE_ENTRY_FILE } from '../common/constant.js';

export function genSiteEntry(): Promise<void> {
  return new Promise((resolve, reject) => {
    genStyleDepsMap()
      .then(() => {
        genPackageEntry({
          outputPath: PACKAGE_ENTRY_FILE,
        });
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
    const config = await mergeCustomViteConfig(
      getViteConfigForSiteProd(),
      'production'
    );
    await build(config);
  } else {
    const config = await mergeCustomViteConfig(
      getViteConfigForSiteDev(),
      'development'
    );
    const server = await createServer(config);
    await server.listen(config.server?.port);

    const require = createRequire(import.meta.url);
    const { version } = require('vite/package.json');
    const viteInfo = color.cyan(`vite v${version}`);
    console.log(`\n  ${viteInfo}` + color.green(` dev server running at:\n`));
    server.printUrls();
  }
}
