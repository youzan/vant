import decamelize from 'decamelize';
import { join } from 'path';
import { execSync } from 'child_process';
import {
  lstatSync,
  existsSync,
  readdirSync,
  readFileSync,
  outputFileSync
} from 'fs-extra';
import { SRC_DIR, getVantConfig, WEBPACK_CONFIG_FILE } from './constant';

export const EXT_REGEXP = /\.\w+$/;
export const SFC_REGEXP = /\.(vue)$/;
export const DEMO_REGEXP = /\/demo$/;
export const TEST_REGEXP = /\/test$/;
export const STYLE_REGEXP = /\.(css|less|scss)$/;
export const SCRIPT_REGEXP = /\.(js|ts|jsx|tsx)$/;
export const ENTRY_EXTS = ['js', 'ts', 'tsx', 'jsx', 'vue'];

export function removeExt(path: string) {
  return path.replace('.js', '');
}

export function replaceExt(path: string, ext: string) {
  return path.replace(EXT_REGEXP, ext);
}

export function getComponents() {
  const EXCLUDES = ['.DS_Store'];
  const dirs = readdirSync(SRC_DIR);
  return dirs
    .filter(dir => !EXCLUDES.includes(dir))
    .filter(dir =>
      ENTRY_EXTS.some(ext => {
        const path = join(SRC_DIR, dir, `index.${ext}`);
        if (existsSync(path)) {
          return readFileSync(path, 'utf-8').indexOf('export default') !== -1;
        }

        return false;
      })
    );
}

export function isDir(dir: string) {
  return lstatSync(dir).isDirectory();
}

export function isDemoDir(dir: string) {
  return DEMO_REGEXP.test(dir);
}

export function isTestDir(dir: string) {
  return TEST_REGEXP.test(dir);
}

export function isSfc(path: string) {
  return SFC_REGEXP.test(path);
}

export function isStyle(path: string) {
  return STYLE_REGEXP.test(path);
}

export function isScript(path: string) {
  return SCRIPT_REGEXP.test(path);
}

const camelizeRE = /-(\w)/g;
const pascalizeRE = /(\w)(\w*)/g;

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function pascalize(str: string): string {
  return camelize(str).replace(
    pascalizeRE,
    (_, c1, c2) => c1.toUpperCase() + c2
  );
}

export function getWebpackConfig(): object {
  if (existsSync(WEBPACK_CONFIG_FILE)) {
    const config = require(WEBPACK_CONFIG_FILE);

    if (typeof config === 'function') {
      return config();
    }

    return config;
  }

  return {};
}

export type ModuleEnv = 'esmodule' | 'commonjs';
export type NodeEnv = 'production' | 'development' | 'test';
export type BuildTarget = 'site' | 'package';

export function setModuleEnv(value: ModuleEnv) {
  process.env.BABEL_MODULE = value;
}

export function setNodeEnv(value: NodeEnv) {
  process.env.NODE_ENV = value;
}

export function setBuildTarget(value: BuildTarget) {
  process.env.BUILD_TARGET = value;
}

export function isDev() {
  return process.env.NODE_ENV === 'development';
}

// Smarter outputFileSync
// Skip if content unchanged
export function smartOutputFile(filePath: string, content: string) {
  if (existsSync(filePath)) {
    const previousContent = readFileSync(filePath, 'utf-8');

    if (previousContent === content) {
      return;
    }
  }

  outputFileSync(filePath, content);
}

let hasYarnCache: boolean;

export function hasYarn() {
  if (hasYarnCache === undefined) {
    try {
      execSync('yarn --version', { stdio: 'ignore' });
      hasYarnCache = true;
    } catch (e) {
      hasYarnCache = false;
    }
  }

  return hasYarnCache;
}

export { decamelize, getVantConfig };
