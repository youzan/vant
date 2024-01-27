import { join } from 'path';
import { getVantConfig, setBuildTarget } from '../common/index.js';
import { getTemplateParams } from './get-template-params.js';
import { genPackageEntry } from './gen-package-entry.js';
import { genStyleDepsMap } from './gen-style-deps-map.js';
import type { RsbuildConfig } from '@rsbuild/core';
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module';
import { CSS_LANG } from '../common/css.js';
import { genSiteMobileShared } from '../compiler/gen-site-mobile-shared.js';
import { genSiteDesktopShared } from '../compiler/gen-site-desktop-shared.js';
import { genPackageStyle } from '../compiler/gen-package-style.js';
import {
  MD_LOADER,
  SITE_SRC_DIR,
  SITE_DIST_DIR,
  PACKAGE_ENTRY_FILE,
} from '../common/constant.js';

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

export async function compileSite(isProd = false) {
  setBuildTarget('site');

  const { createRsbuild } = await import('@rsbuild/core');
  const { pluginVue } = await import('@rsbuild/plugin-vue');
  const { pluginVueJsx } = await import('@rsbuild/plugin-vue-jsx');
  const { pluginBabel } = await import('@rsbuild/plugin-babel');

  await genSiteEntry();

  const vantConfig = getVantConfig();
  const assetPrefix = vantConfig.build?.site?.publicPath || '/';

  const rsbuildConfig: RsbuildConfig = {
    plugins: [
      pluginBabel({
        include: /\.(jsx|tsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
      }),
      pluginVue(),
      pluginVueJsx(),
    ],
    source: {
      entry: {
        index: join(SITE_SRC_DIR, 'desktop/main.js'),
        mobile: join(SITE_SRC_DIR, 'mobile/main.js'),
      },
    },
    dev: {
      assetPrefix,
    },
    output: {
      assetPrefix,
      // make compilation faster
      sourceMap: {
        js: false,
        css: false,
      },
      distPath: {
        root: vantConfig.build?.site?.outputDir || SITE_DIST_DIR,
      },
      cleanDistPath: true,
    },
    html: {
      template: ({ entryName }) => join(SITE_SRC_DIR, `${entryName}.html`),
      templateParameters: getTemplateParams(),
    },
    tools: {
      bundlerChain(chain) {
        chain.module.rule('md').test(/\.md$/).use('md').loader(MD_LOADER);
      },
      rspack: {
        plugins: [
          new RspackVirtualModulePlugin({
            'site-mobile-shared': genSiteMobileShared(),
            'site-desktop-shared': genSiteDesktopShared(),
            [`package-style.${CSS_LANG}`]: genPackageStyle() || '',
          }),
        ],
      },
    },
  };

  const rsbuild = await createRsbuild({
    cwd: SITE_SRC_DIR,
    rsbuildConfig,
  });

  if (isProd) {
    await rsbuild.build();
  } else {
    await rsbuild.startDevServer();
  }
}
