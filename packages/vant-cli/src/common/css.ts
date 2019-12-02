import { get } from 'lodash';
import { join, isAbsolute } from 'path';
import { CONFIG, STYLE_DIR, SRC_DIR } from './constant';
import { existsSync } from 'fs';

type CSS_LANG = 'css' | 'less' | 'scss';

function getCssLang(): CSS_LANG {
  const preprocessor = get(CONFIG, 'build.css.preprocessor', 'less');

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export const CSS_LANG = getCssLang();

export function getCssBaseFile() {
  let path = join(STYLE_DIR, `base.${CSS_LANG}`);

  const baseFile = get(CONFIG, 'build.css.base', '');
  if (baseFile) {
    path = isAbsolute(baseFile) ? baseFile : join(SRC_DIR, baseFile);
  }

  if (existsSync(path)) {
    return path;
  }

  return null;
}
