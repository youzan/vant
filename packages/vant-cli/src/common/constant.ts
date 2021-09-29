import { get } from 'lodash';
import { existsSync } from 'fs-extra';
import { join, dirname, isAbsolute } from 'path';

function findRootDir(dir: string): string {
  if (existsSync(join(dir, 'vant.config.js'))) {
    return dir;
  }

  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}

// Root paths
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
export const ES_DIR = join(ROOT, 'es');
export const LIB_DIR = join(ROOT, 'lib');
export const DOCS_DIR = join(ROOT, 'docs');
export const VETUR_DIR = join(ROOT, 'vetur');
export const SITE_DIST_DIR = join(ROOT, 'site-dist');
export const VANT_CONFIG_FILE = join(ROOT, 'vant.config.js');
export const PACKAGE_JSON_FILE = join(ROOT, 'package.json');
export const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');

// Relative paths
export const DIST_DIR = join(__dirname, '../../dist');
export const CONFIG_DIR = join(__dirname, '../config');
export const SITE_SRC_DIR = join(__dirname, '../../site');

// Dist files
export const PACKAGE_ENTRY_FILE = join(DIST_DIR, 'package-entry.js');
export const PACKAGE_STYLE_FILE = join(DIST_DIR, 'package-style.css');
export const SITE_MOBILE_SHARED_FILE = join(DIST_DIR, 'site-mobile-shared.js');
export const SITE_DESKTOP_SHARED_FILE = join(
  DIST_DIR,
  'site-desktop-shared.js'
);
export const STYLE_DEPS_JSON_FILE = join(DIST_DIR, 'style-deps.json');

// Config files
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
export const JEST_SETUP_FILE = join(CONFIG_DIR, 'jest.setup.js');
export const JEST_CONFIG_FILE = join(CONFIG_DIR, 'jest.config.js');
export const JEST_TRANSFORM_FILE = join(CONFIG_DIR, 'jest.transform.js');
export const JEST_FILE_MOCK_FILE = join(CONFIG_DIR, 'jest.file-mock.js');
export const JEST_STYLE_MOCK_FILE = join(CONFIG_DIR, 'jest.style-mock.js');

export const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx'];
export const STYLE_EXTS = ['.css', '.less', '.scss'];

export function getPackageJson() {
  delete require.cache[PACKAGE_JSON_FILE];

  return require(PACKAGE_JSON_FILE);
}

export function getVantConfig() {
  delete require.cache[VANT_CONFIG_FILE];

  try {
    return require(VANT_CONFIG_FILE);
  } catch (err) {
    return {};
  }
}

function getSrcDir() {
  const vantConfig = getVantConfig();
  const srcDir = get(vantConfig, 'build.srcDir');

  if (srcDir) {
    if (isAbsolute(srcDir)) {
      return srcDir;
    }

    return join(ROOT, srcDir);
  }

  return join(ROOT, 'src');
}

export const SRC_DIR = getSrcDir();
export const STYLE_DIR = join(SRC_DIR, 'style');
