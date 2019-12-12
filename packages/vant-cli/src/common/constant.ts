import { get } from 'lodash';
import { join, isAbsolute } from 'path';

export const CWD = process.cwd();
export const ES_DIR = join(CWD, 'es');
export const LIB_DIR = join(CWD, 'lib');
export const DOCS_DIR = join(CWD, 'docs');
export const SITE_DIST_DIR = join(CWD, 'site');
export const VANT_CONFIG_FILE = join(CWD, 'vant.config.js');
export const PACKAGE_JSON_FILE = join(CWD, 'package.json');
export const WEBPACK_CONFIG_FILE = join(CWD, 'webpack.config.js');

export const DIST_DIR = join(__dirname, '../../dist');
export const CONFIG_DIR = join(__dirname, '../config');

export const PACKAGE_ENTRY_FILE = join(DIST_DIR, 'package-entry.js');
export const PACKAGE_STYLE_FILE = join(DIST_DIR, 'package-style.css');
export const SITE_MODILE_SHARED_FILE = join(DIST_DIR, 'site-mobile-shared.js');
export const SITE_DESKTOP_SHARED_FILE = join(DIST_DIR, 'site-desktop-shared.js');
export const STYPE_DEPS_JSON_FILE = join(DIST_DIR, 'style-deps.json');

export const JEST_CONFIG_FILE = join(CONFIG_DIR, 'jest.config.js');
export const BABEL_CONFIG_FILE = join(CONFIG_DIR, 'babel.config.js');
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
export const JEST_INIT_FILE = join(CONFIG_DIR, 'jest.init.js');
export const JEST_TRANSFORM_FILE = join(CONFIG_DIR, 'jest.transform.js');
export const JEST_FILE_MOCK_FILE = join(CONFIG_DIR, 'jest.file-mock.js');
export const JEST_STYLE_MOCK_FILE = join(CONFIG_DIR, 'jest.style-mock.js');

export const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx'];
export const STYLE_EXTS = ['.css', '.less', '.scss'];

export const PACKAGE_JSON = require(PACKAGE_JSON_FILE);

export function getVantConfig() {
  delete require.cache[VANT_CONFIG_FILE];

  return require(VANT_CONFIG_FILE);
}

function getSrcDir() {
  const vantConfig = getVantConfig();
  const srcDir = get(vantConfig, 'build.srcDir');

  if (srcDir) {
    if (isAbsolute(srcDir)) {
      return srcDir;
    }

    return join(CWD, srcDir);
  }

  return join(CWD, 'src');
}

export const SRC_DIR = getSrcDir();
export const STYLE_DIR = join(SRC_DIR, 'style');
