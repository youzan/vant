import execa from 'execa';
import { join, relative } from 'path';
import { remove, copy, readdir, existsSync } from 'fs-extra';
import { clean } from './clean';
import { CSS_LANG } from '../common/css';
import { ora, consola } from '../common/logger';
import { installDependencies } from '../common/manager';
import { compileSfc } from '../compiler/compile-sfc';
import { compileStyle } from '../compiler/compile-style';
import { compileScript } from '../compiler/compile-script';
import { compilePackage } from '../compiler/compile-package';
import { genPackageEntry } from '../compiler/gen-package-entry';
import { genStyleDepsMap } from '../compiler/gen-style-deps-map';
import { genComponentStyle } from '../compiler/gen-component-style';
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant';
import { genPackageStyle } from '../compiler/gen-package-style';
import { genVeturConfig } from '../compiler/gen-vetur-config';
import {
  isDir,
  isSfc,
  isAsset,
  isStyle,
  isScript,
  isDemoDir,
  isTestDir,
  setNodeEnv,
  setModuleEnv,
  setBuildTarget,
} from '../common';

async function compileFile(filePath: string) {
  if (isScript(filePath)) {
    return compileScript(filePath);
  }
  if (isStyle(filePath)) {
    return compileStyle(filePath);
  }
  if (isAsset(filePath)) {
    return Promise.resolve();
  }
  return remove(filePath);
}

/**
 * Pre-compile
 * 1. Remove unneeded dirs
 * 2. compile sfc into scripts/styles
 */
async function preCompileDir(dir: string) {
  const files = await readdir(dir);

  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);

      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath);
      }
      if (isDir(filePath)) {
        return preCompileDir(filePath);
      }
      if (isSfc(filePath)) {
        return compileSfc(filePath);
      }
      return Promise.resolve();
    })
  );
}

async function compileDir(dir: string) {
  const files = await readdir(dir);
  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);
      return isDir(filePath) ? compileDir(filePath) : compileFile(filePath);
    })
  );
}

async function copySourceCode() {
  return Promise.all([copy(SRC_DIR, ES_DIR), copy(SRC_DIR, LIB_DIR)]);
}

async function buildESMOutputs() {
  setModuleEnv('esmodule');
  setBuildTarget('package');
  await compileDir(ES_DIR);
}

async function buildCJSOutputs() {
  setModuleEnv('commonjs');
  setBuildTarget('package');
  await compileDir(LIB_DIR);
}

async function buildTypeDeclarations() {
  await Promise.all([preCompileDir(ES_DIR), preCompileDir(LIB_DIR)]);

  const tsConfig = join(process.cwd(), 'tsconfig.declaration.json');

  if (existsSync(tsConfig)) {
    await execa('tsc', ['-p', tsConfig]);
  }
}

async function buildStyleEntry() {
  await genStyleDepsMap();
  genComponentStyle();
}

async function buildPackageScriptEntry() {
  const esEntryFile = join(ES_DIR, 'index.js');
  const libEntryFile = join(LIB_DIR, 'index.js');

  genPackageEntry({
    outputPath: esEntryFile,
    pathResolver: (path: string) => `./${relative(SRC_DIR, path)}`,
  });

  await copy(esEntryFile, libEntryFile);
}

async function buildPackageStyleEntry() {
  const styleEntryFile = join(LIB_DIR, `index.${CSS_LANG}`);

  genPackageStyle({
    outputPath: styleEntryFile,
    pathResolver: (path: string) => path.replace(SRC_DIR, '.'),
  });
}

async function buildBundledOutputs() {
  setModuleEnv('esmodule');
  await compilePackage(false);
  await compilePackage(true);
  genVeturConfig();
}

const tasks = [
  {
    text: 'Copy Source Code',
    task: copySourceCode,
  },
  {
    text: 'Build Package Script Entry',
    task: buildPackageScriptEntry,
  },
  {
    text: 'Build Component Style Entry',
    task: buildStyleEntry,
  },
  {
    text: 'Build Package Style Entry',
    task: buildPackageStyleEntry,
  },
  {
    text: 'Build Type Declarations',
    task: buildTypeDeclarations,
  },
  {
    text: 'Build ESModule Outputs',
    task: buildESMOutputs,
  },
  {
    text: 'Build CommonJS Outputs',
    task: buildCJSOutputs,
  },
  {
    text: 'Build Bundled Outputs',
    task: buildBundledOutputs,
  },
];

async function runBuildTasks() {
  for (let i = 0; i < tasks.length; i++) {
    const { task, text } = tasks[i];
    const spinner = ora(text).start();

    try {
      /* eslint-disable no-await-in-loop */
      await task();
      spinner.succeed(text);
    } catch (err) {
      spinner.fail(text);
      console.log(err);
      throw err;
    }
  }

  consola.success('Compile successfully');
}

export async function build() {
  setNodeEnv('production');

  try {
    await clean();
    await installDependencies();
    await runBuildTasks();
  } catch (err) {
    consola.error('Build failed');
    process.exit(1);
  }
}
