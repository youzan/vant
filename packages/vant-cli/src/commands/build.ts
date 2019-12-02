import { join } from 'path';
import { clean } from './clean';
import { remove, copy, readdirSync } from 'fs-extra';
import { compileJs } from '../compiler/compile-js';
import { compileSfc } from '../compiler/compile-sfc';
import { compileStyle } from '../compiler/compile-style';
import { compilePackage } from '../compiler/compile-package';
import { genPackageEntry } from '../compiler/gen-package-entry';
import { genStyleDepsMap } from '../compiler/gen-style-deps-map';
import { genComponentStyle } from '../compiler/gen-component-style';
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant';
import {
  logger,
  isDir,
  isSfc,
  isStyle,
  isScript,
  isDemoDir,
  isTestDir,
  setNodeEnv,
  setModuleEnv
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

async function buildESModuleOutputs() {
  await copy(SRC_DIR, ES_DIR);

  logger.start('Build esmodule outputs');

  try {
    setModuleEnv('esmodule');
    await compileDir(ES_DIR);
    logger.success('Build esmodule outputs');
  } catch (err) {
    logger.error('Build esmodule outputs');
  }
}

async function buildCommonjsOutputs() {
  await copy(SRC_DIR, LIB_DIR);

  logger.start('Build commonjs outputs');

  try {
    setModuleEnv('commonjs');
    await compileDir(LIB_DIR);
    logger.success('Build commonjs outputs');
  } catch (err) {
    logger.error('Build commonjs outputs');
  }
}

async function buildStyleEntry() {
  logger.start('Build style entry');

  try {
    await genStyleDepsMap();
    genComponentStyle();
    logger.success('Build style entry');
  } catch (err) {
    logger.error('Build style entry');
  }
}

async function buildPackedOutputs() {
  logger.start('Build packed outputs');

  try {
    genPackageEntry();
    await compilePackage(false);
    await compilePackage(true);
    logger.success('Build packed outputs');
  } catch (err) {
    logger.error('Build packed outputs');
  }
}

export async function build() {
  setNodeEnv('production');
  await clean();
  await buildESModuleOutputs();
  await buildCommonjsOutputs();
  await buildStyleEntry();
  await buildPackedOutputs();
}
