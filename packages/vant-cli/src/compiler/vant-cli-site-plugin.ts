import { Compiler } from 'webpack';
import { replaceExt } from '../common';
import { CSS_LANG } from '../common/css';
import { genPackageEntry } from './gen-package-entry';
import { genPacakgeStyle } from './gen-package-style';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';
import { genStyleDepsMap } from './gen-style-deps-map';
import { PACKAGE_ENTRY_FILE, PACKAGE_STYLE_FILE } from '../common/constant';

const PLUGIN_NAME = 'VantCliSitePlugin';

export async function genSiteEntry(): Promise<void> {
  return new Promise((resolve, reject) => {
    genStyleDepsMap()
      .then(() => {
        genPackageEntry({
          outputPath: PACKAGE_ENTRY_FILE,
        });
        genPacakgeStyle({
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

export class VantCliSitePlugin {
  apply(compiler: Compiler) {
    if (process.env.NODE_ENV === 'production') {
      compiler.hooks.beforeCompile.tapPromise(PLUGIN_NAME, genSiteEntry);
    } else {
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry);
    }
  }
}
