import webpack from 'webpack';
import { start, error, success } from 'signale';
import { packageConfig } from '../config/webpack.package';
import { join } from 'path';
import { clean } from './clean';
import { remove, copy, readdirSync } from 'fs-extra';
import { compileJs } from '../compiler/compile-js';
import { compileSfc } from '../compiler/compile-sfc';
import { compileStyle } from '../compiler/compile-style';
import { genStyleEntry } from '../compiler/gen-style-entry';
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

  await Promise.all(
    files.map(filename => {
      const filePath = join(dir, filename);

      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath);
      }

      if (isDir(filePath)) {
        return compileDir(filePath);
      }

      if (isSfc(filePath)) {
        return compileSfc(filePath);
      }

      if (isScript(filePath)) {
        return compileJs(filePath);
      }

      if (isStyle(filePath)) {
        return compileStyle(filePath);
      }

      return remove(filePath);
    })
  );
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

export async function buildESModuleOutputs() {
  await copy(SRC_DIR, ES_DIR);

  start('Build esmodule outputs');

  try {
    setModuleEnv('esmodule');
    await compileDir(ES_DIR);
    success('Build esmodule outputs');
  } catch (err) {
    error('Build esmodule outputs');
  }
}

export async function buildCommonjsOutputs() {
  await copy(SRC_DIR, LIB_DIR);

  start('Build commonjs outputs');

  try {
    setModuleEnv('commonjs');
    await compileDir(LIB_DIR);
    success('Build commonjs outputs');
  } catch (err) {
    error('Build commonjs outputs');
  }
}

export async function buildStyleEntry() {
  start('Build style entry');

  try {
    genStyleEntry();
    success('Build style entry');
  } catch (err) {
    error('Build style entry');
  }
}

export async function buildPackedOutputs() {
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

export async function build() {
  await clean();
  await buildESModuleOutputs();
  await buildCommonjsOutputs();
  await buildStyleEntry();
  await buildPackedOutputs();
}
