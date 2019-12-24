// @ts-ignore
import execa from 'execa';
import chokidar from 'chokidar';
import { join, relative } from 'path';
import { remove, copy, readdirSync } from 'fs-extra';
import { clean } from './clean';
import { CSS_LANG } from '../common/css';
import { getStepper, getInteractiveLogger, logger } from '../common/logger';
import { compileJs } from '../compiler/compile-js';
import { compileSfc } from '../compiler/compile-sfc';
import { compileStyle } from '../compiler/compile-style';
import { compilePackage } from '../compiler/compile-package';
import { genPackageEntry } from '../compiler/gen-package-entry';
import { genStyleDepsMap } from '../compiler/gen-style-deps-map';
import { genComponentStyle } from '../compiler/gen-component-style';
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant';
import { genPacakgeStyle } from '../compiler/gen-package-style';
import { genVeturConfig } from '../compiler/gen-vetur-config';
import {
  isDir,
  isSfc,
  isStyle,
  isScript,
  isDemoDir,
  isTestDir,
  hasYarn,
  setNodeEnv,
  setModuleEnv
} from '../common';

const stepper = getStepper(12);

async function compileFile(filePath: string) {
  if (isSfc(filePath)) {
    return compileSfc(filePath);
  }

  if (isScript(filePath)) {
    return compileJs(filePath, { reloadConfig: true });
  }

  if (isStyle(filePath)) {
    return compileStyle(filePath);
  }

  return remove(filePath);
}

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

      return compileFile(filePath);
    })
  );
}

async function installDependencies() {
  stepper.start('Install Dependencies');

  try {
    const manager = hasYarn() ? 'yarn' : 'npm';

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit'
    });

    stepper.success('Install Dependencies');
  } catch (err) {
    stepper.error('Install Dependencies', err);
    throw err;
  }
}

async function buildESModuleOutputs() {
  stepper.start('Build ESModule Outputs');

  try {
    setModuleEnv('esmodule');
    await copy(SRC_DIR, ES_DIR);
    await compileDir(ES_DIR);
    stepper.success('Build ESModule Outputs');
  } catch (err) {
    stepper.error('Build ESModule Outputs', err);
    throw err;
  }
}

async function buildCommonjsOutputs() {
  stepper.start('Build Commonjs Outputs');

  try {
    setModuleEnv('commonjs');
    await copy(SRC_DIR, LIB_DIR);
    await compileDir(LIB_DIR);
    stepper.success('Build Commonjs Outputs');
  } catch (err) {
    stepper.error('Build Commonjs Outputs', err);
    throw err;
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
    throw err;
  }
}

async function buildPackedOutputs() {
  stepper.start('Build Packed Outputs');

  try {
    setModuleEnv('esmodule');
    await compilePackage(false);
    await compilePackage(true);
    genVeturConfig();
    stepper.success('Build Packed Outputs');
  } catch (err) {
    stepper.error('Build Packed Outputs', err);
    throw err;
  }
}

async function buildPackageEntry() {
  stepper.start('Build Package Entry');

  try {
    const esEntryFile = join(ES_DIR, 'index.js');
    const libEntryFile = join(LIB_DIR, 'index.js');
    const styleEntryFile = join(LIB_DIR, `index.${CSS_LANG}`);

    genPackageEntry({
      outputPath: esEntryFile,
      pathResolver: (path: string) => `./${relative(SRC_DIR, path)}`
    });

    setModuleEnv('esmodule');
    await compileJs(esEntryFile, { reloadConfig: true });

    genPacakgeStyle({
      outputPath: styleEntryFile,
      pathResolver: (path: string) => path.replace(SRC_DIR, '.')
    });

    setModuleEnv('commonjs');
    await copy(esEntryFile, libEntryFile);
    await compileJs(libEntryFile, { reloadConfig: true });
    await compileStyle(styleEntryFile);

    stepper.success('Build Package Entry');
  } catch (err) {
    stepper.error('Build Package Entry', err);
    throw err;
  }
}

function watchFileChange() {
  logger.watch('Compiled successfully, watching file changes...');

  chokidar.watch(SRC_DIR).on('change', async path => {
    if (isDemoDir(path) || isTestDir(path)) {
      return;
    }

    const logger = getInteractiveLogger();
    const esPath = path.replace(SRC_DIR, ES_DIR);
    const libPath = path.replace(SRC_DIR, LIB_DIR);

    logger.pending('File change detected, start compilation...');

    try {
      await copy(path, esPath);
      await copy(path, libPath);
      await compileFile(esPath);
      await compileFile(libPath);
      await genStyleDepsMap();
      genComponentStyle({ cache: false });
      logger.success('Compiled: ' + path);
    } catch (err) {
      logger.error('Compile failed: ' + path);
      console.log(err);
    }
  });
}

export async function build(cmd: { watch?: boolean } = {}) {
  setNodeEnv('production');

  try {
    await clean();
    await installDependencies();
    await buildESModuleOutputs();
    await buildCommonjsOutputs();
    await buildStyleEntry();
    await buildPackageEntry();
    await buildPackedOutputs();

    if (cmd.watch) {
      watchFileChange();
    }
  } catch (err) {
    logger.error('Build failed');
    process.exit(1);
  }
}
