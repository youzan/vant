import fse from 'fs-extra';
import { join } from 'path';
import { build } from 'vite';
import { getPackageJson, getVantConfig, LIB_DIR } from '../common/constant.js';
import { mergeCustomViteConfig } from '../common/index.js';
import { getViteConfigForPackage } from '../config/vite.package.js';

// generate entry file for nuxt
async function genEntryForSSR() {
  const { name } = getVantConfig();
  const cjsPath = join(LIB_DIR, 'ssr.js');
  const mjsPath = join(LIB_DIR, 'ssr.mjs');

  const cjsContent = `'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./${name}.cjs.min.js');
} else {
  module.exports = require('./${name}.cjs.js');
};
`;

  const mjsContent = `export * from './index.js';\n`;

  return Promise.all([
    fse.outputFile(cjsPath, cjsContent),
    fse.outputFile(mjsPath, mjsContent),
  ]);
}

export async function compileBundles() {
  const dependencies = getPackageJson().dependencies || {};
  const externals = Object.keys(dependencies);

  const configs = [
    // umd bundle
    getViteConfigForPackage({
      minify: false,
      formats: ['umd'],
      external: ['vue'],
    }),
    // umd bundle (minified)
    getViteConfigForPackage({
      minify: true,
      formats: ['umd'],
      external: ['vue'],
    }),
    // esm/cjs bundle
    getViteConfigForPackage({
      minify: false,
      formats: ['es', 'cjs'],
      external: ['vue', ...externals],
    }),
    // esm/cjs bundle (minified)
    // vite will not minify es bundle
    // see: https://github.com/vuejs/vue-next/issues/2860
    getViteConfigForPackage({
      minify: true,
      formats: ['es', 'cjs'],
      external: ['vue', ...externals],
    }),
  ];

  await Promise.all(
    configs.map((config) => build(mergeCustomViteConfig(config)))
  );
  await genEntryForSSR();
}
