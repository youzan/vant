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
import { getStepper } from '../common/logger';
import {
  isDir,
  isSfc,
  isStyle,
  isScript,
  isDemoDir,
  isTestDir,
  setNodeEnv,
  setModuleEnv
} from '../common';

const stepper = getStepper(8);

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
  stepper.start('Build ESModule Outputs');

  try {
    await copy(SRC_DIR, ES_DIR);
    setModuleEnv('esmodule');
    await compileDir(ES_DIR);
    stepper.success('Build ESModule Outputs');
  } catch (err) {
    stepper.error('Build ESModule Outputs', err);
  }
}

async function buildCommonjsOutputs() {
  stepper.start('Build Commonjs Outputs');

  try {
    await copy(SRC_DIR, LIB_DIR);
    setModuleEnv('commonjs');
    await compileDir(LIB_DIR);
    stepper.success('Build Commonjs Outputs');
  } catch (err) {
    stepper.error('Build Commonjs Outputs', err);
  }
}

async function buildStyleEntry() {
  stepper.start('Build Style Entry');

  try {
    await genStyleDepsMap();
    genComponentStyle();
    stepper.success('Build Style Entry');
  } catch (err) {
    stepper.error('Build Style Entry', err);
  }
}

async function buildPackedOutputs() {
  stepper.start('Build Packed Outputs');

  try {
    genPackageEntry();
    await compilePackage(false);
    await compilePackage(true);
    stepper.success('Build Packed Outputs');
  } catch (err) {
    stepper.error('Build Packed Outputs', err);
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
