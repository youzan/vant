import { existsSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';
import { getVantConfig } from '../common/index.js';
import { STYLE_DIR, SRC_DIR } from './constant.js';

type CSS_LANG = 'css' | 'less' | 'scss';

function getCssLang(): CSS_LANG {
  const vantConfig = getVantConfig();
  const preprocessor = vantConfig.build?.css?.preprocessor || 'less';

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export const CSS_LANG = getCssLang();

export function getCssBaseFile() {
  const vantConfig = getVantConfig();
  let path = join(STYLE_DIR, `base.${CSS_LANG}`);

  const baseFile = vantConfig.build?.css?.base || '';
  if (baseFile) {
    path = isAbsolute(baseFile) ? baseFile : join(SRC_DIR, baseFile);
  }

  if (existsSync(path)) {
    return path;
  }

  return null;
}

const IMPORT_STYLE_RE = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

// "import 'a.less';" => "import 'a.css';"
export function replaceCSSImportExt(code: string) {
  return code.replace(IMPORT_STYLE_RE, (str) =>
    str.replace(`.${CSS_LANG}`, '.css'),
  );
}
