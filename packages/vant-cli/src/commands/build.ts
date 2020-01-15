// @ts-ignore
import execa from 'execa';
import chokidar from 'chokidar';
import { join, relative } from 'path';
import { remove, copy, readdirSync } from 'fs-extra';
import { clean } from './clean';
import { CSS_LANG } from '../common/css';
import { ora, consola, slimPath } from '../common/logger';
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

async function compileFile(filePath: string) {
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
  consola.info('Install Dependencies');
  console.log('');

  try {
    const manager = hasYarn() ? 'yarn' : 'npm';

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit'
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function buildESModuleOutputs() {
  const spinner = ora('Build ESModule Outputs').start();

  try {
    setModuleEnv('esmodule');
    await copy(SRC_DIR, ES_DIR);
    await compileDir(ES_DIR);
    spinner.succeed('Build ESModule Outputs');
  } catch (err) {
    spinner.fail('Build ESModule Outputs');
    console.log(err);
    throw err;
  }
}

async function buildCommonjsOutputs() {
  const spinner = ora('Build Commonjs Outputs').start();

  try {
    setModuleEnv('commonjs');
    await copy(SRC_DIR, LIB_DIR);
    await compileDir(LIB_DIR);
    spinner.succeed('Build Commonjs Outputs');
  } catch (err) {
    spinner.fail('Build Commonjs Outputs');
    console.log(err);
    throw err;
  }
}

async function buildStyleEntry() {
  const spinner = ora('Build Style Entry').start();

  try {
    await genStyleDepsMap();
    genComponentStyle();
    spinner.succeed('Build Style Entry');
  } catch (err) {
    spinner.fail('Build Style Entry');
    console.log(err);
    throw err;
  }
}

async function buildPackedOutputs() {
  const spinner = ora('Build Packed Outputs').start();

  try {
    setModuleEnv('esmodule');
    await compilePackage(false);
    await compilePackage(true);
    genVeturConfig();
    spinner.succeed('Build Packed Outputs');
  } catch (err) {
    spinner.fail('Build Packed Outputs');
    console.log(err);
    throw err;
  }
}

async function buildPackageEntry() {
  const spinner = ora('Build Package Entry').start();

  try {
    const esEntryFile = join(ES_DIR, 'index.js');
    const libEntryFile = join(LIB_DIR, 'index.js');
    const styleEntryFile = join(LIB_DIR, `index.${CSS_LANG}`);

    genPackageEntry({
      outputPath: esEntryFile,
      pathResolver: (path: string) => `./${relative(SRC_DIR, path)}`
    });

    setModuleEnv('esmodule');
    await compileJs(esEntryFile);

    genPacakgeStyle({
      outputPath: styleEntryFile,
      pathResolver: (path: string) => path.replace(SRC_DIR, '.')
    });

    setModuleEnv('commonjs');
    await copy(esEntryFile, libEntryFile);
    await compileJs(libEntryFile);
    await compileStyle(styleEntryFile);

    spinner.succeed('Build Package Entry');
  } catch (err) {
    spinner.fail('Build Package Entry');
    console.log(err);
    throw err;
  }
}

function watchFileChange() {
  consola.info('\nWatching file changes...');

  chokidar.watch(SRC_DIR).on('change', async path => {
    if (isDemoDir(path) || isTestDir(path)) {
      return;
    }

    const spinner = ora('File changed, start compilation...').start();
    const esPath = path.replace(SRC_DIR, ES_DIR);
    const libPath = path.replace(SRC_DIR, LIB_DIR);

    try {
      await copy(path, esPath);
      await copy(path, libPath);
      await compileFile(esPath);
      await compileFile(libPath);
      await genStyleDepsMap();
      genComponentStyle({ cache: false });
      spinner.succeed('Compiled: ' + slimPath(path));
    } catch (err) {
      spinner.fail('Compile failed: ' + path);
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

    consola.success('Compile successfully');

    if (cmd.watch) {
      watchFileChange();
    }
  } catch (err) {
    consola.error('Build failed');
    process.exit(1);
  }
}
