import { join } from 'path';

export const CWD = process.cwd();
export const ES_DIR = join(CWD, 'es');
export const LIB_DIR = join(CWD, 'lib');
export const SRC_DIR = join(CWD, 'src');
export const DOCS_DIR = join(CWD, 'docs');
export const CONFIG_FILE = join(CWD, 'components.config.js');
export const DIST_DIR = join(__dirname, '../../dist');
export const CONFIG_DIR = join(__dirname, '../config');
export const MOBILE_CONFIG_FILE = join(DIST_DIR, 'mobile-config.js');
export const DESKTOP_CONFIG_FILE = join(DIST_DIR, 'desktop-config.js');
export const BABEL_CONFIG_FILE = join(CONFIG_DIR, 'babel.config.js');
export const JEST_CONFIG_FILE = join(CONFIG_DIR, 'jest.config.js');
export const JEST_FILE_MOCK_FILE = join(CONFIG_DIR, 'jest.file-mock.js');
export const JEST_STYLE_MOCK_FILE = join(CONFIG_DIR, 'jest.style-mock.js');
export const JEST_TRANSFORM_FILE = join(CONFIG_DIR, 'jest.transform.js');
export const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
