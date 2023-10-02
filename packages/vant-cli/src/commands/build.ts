import fse from 'fs-extra';
import { logger } from 'rslog';
import { execSync } from 'child_process';
import { join, relative } from 'node:path';
import { clean } from './clean.js';
import { CSS_LANG } from '../common/css.js';
import { installDependencies } from '../common/manager.js';
import { compileSfc } from '../compiler/compile-sfc.js';
import { compileStyle } from '../compiler/compile-style.js';
import { compileScript } from '../compiler/compile-script.js';
import { compileBundles } from '../compiler/compile-bundles.js';
import { genPackageEntry } from '../compiler/gen-package-entry.js';
import { genStyleDepsMap } from '../compiler/gen-style-deps-map.js';
import { genComponentStyle } from '../compiler/gen-component-style.js';
import { SRC_DIR, LIB_DIR, ES_DIR, getVantConfig } from '../common/constant.js';
import { genPackageStyle } from '../compiler/gen-package-style.js';
import { genWebStormTypes } from '../compiler/web-types/index.js';
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
} from '../common/index.js';
import type { Format } from 'esbuild';

const { remove, copy, readdir, existsSync } = fse;

async function compileFile(filePath: string, format: Format) {
  if (isScript(filePath)) {
    return compileScript(filePath, format);
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
    }),
  );
}

async function compileDir(dir: string, format: Format) {
  const files = await readdir(dir);
  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);
      return isDir(filePath)
        ? compileDir(filePath, format)
        : compileFile(filePath, format);
    }),
  );
}

async function copySourceCode() {
  return Promise.all([copy(SRC_DIR, ES_DIR), copy(SRC_DIR, LIB_DIR)]);
}

async function buildESMOutputs() {
  setModuleEnv('esmodule');
  setBuildTarget('package');
  await compileDir(ES_DIR, 'esm');
}

async function buildCJSOutputs() {
  setModuleEnv('commonjs');
  setBuildTarget('package');
  await compileDir(LIB_DIR, 'cjs');
}

async function buildTypeDeclarations() {
  await Promise.all([preCompileDir(ES_DIR), preCompileDir(LIB_DIR)]);

  const tsConfig = join(process.cwd(), 'tsconfig.declaration.json');

  if (existsSync(tsConfig)) {
    execSync(`tsc -p ${tsConfig}`, {
      stdio: 'inherit',
    });
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
  const config = getVantConfig();
  setModuleEnv('esmodule');
  await compileBundles();
  genWebStormTypes(config.build?.tagPrefix);
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

    try {
      /* eslint-disable no-await-in-loop */
      await task();
      logger.ready(text);
    } catch (err) {
      logger.error(text);
      logger.error(err);
      throw err;
    }
  }

  logger.success('Build all files');
}

export async function build() {
  setNodeEnv('production');

  try {
    await clean();
    await installDependencies();
    await runBuildTasks();
  } catch (err) {
    logger.error('Build failed');
    process.exit(1);
  }
}
