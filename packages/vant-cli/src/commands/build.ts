import webpack from 'webpack';
import { start, error, success } from 'signale';
import { packageConfig } from '../config/webpack.package';
import { join } from 'path';
import { clean } from './clean';
import { remove, copy, readdirSync } from 'fs-extra';
import { compileJs } from '../compiler/compile-js';
import { compileSfc } from '../compiler/compile-sfc';
import { compileStyle } from '../compiler/compile-style';
import { genPackageEntry } from '../compiler/gen-package-entry';
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant';
import {
  isDir,
  isSfc,
  isDemoDir,
  isTestDir,
  isScript,
  isStyle
} from '../common';

async function compileDir(dir: string) {
  const files = readdirSync(dir);

  files.forEach(async filename => {
    const filePath = join(dir, filename);

    if (isDemoDir(filePath) || isTestDir(filePath)) {
      await remove(filePath);
    } else if (isDir(filePath)) {
      await compileDir(filePath);
    } else if (isSfc(filePath)) {
      await compileSfc(filePath);
    } else if (isScript(filePath)) {
      await compileJs(filePath);
    } else if (isStyle(filePath)) {
      await compileStyle(filePath);
    } else {
      await remove(filePath);
    }
  });
}

function setModuleEnv(value: string) {
  process.env.BABEL_MODULE = value;
}

function buildPackage(isMinify: boolean) {
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

export async function build() {
  clean();

  await copy(SRC_DIR, ES_DIR);
  await copy(SRC_DIR, LIB_DIR);

  start('Build esmodule outputs');
  try {
    setModuleEnv('esmodule');
    await compileDir(ES_DIR);
    success('Build esmodule outputs');
  } catch (err) {
    error('Build esmodule outputs');
  }

  start('Build commonjs outputs');
  try {
    setModuleEnv('commonjs');
    await compileDir(LIB_DIR);
    success('Build commonjs outputs');
  } catch (err) {
    error('Build commonjs outputs');
  }

  start('Build packed outputs');
  try {
    genPackageEntry();
    await buildPackage(false);
    await buildPackage(true);
    success('Build packed outputs');
  } catch (err) {
    error('Build packed outputs');
  }
}
