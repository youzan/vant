import { Compiler } from 'webpack';
import { genPackageEntry } from './gen-package-entry';
import { genPacakgeStyle } from './gen-package-style';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';
import { genStyleDepsMap } from './gen-style-deps-map';
import { PACKAGE_ENTRY_FILE } from '../common/constant';

const PLUGIN_NAME = 'VantCliSitePlugin';

export class VantCliSitePlugin {
  apply(compiler: Compiler) {
    compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, this.genSiteEntry);
  }

  genSiteEntry() {
    return new Promise((resolve, reject) => {
      genStyleDepsMap()
        .then(() => {
          genPackageEntry({
            outputPath: PACKAGE_ENTRY_FILE
          });
          genPacakgeStyle();
          genSiteMobileShared();
          genSiteDesktopShared();
          resolve();
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
}
