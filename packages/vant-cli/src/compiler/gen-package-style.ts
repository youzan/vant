import { get } from 'lodash';
import { join } from 'path';
import { writeFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import {
  CONFIG,
  SRC_DIR,
  PACKAGE_STYLE_FILE,
  STYPE_DEPS_JSON_FILE
} from '../common/constant';

export function getStyleExt(): string {
  const preprocessor = get(CONFIG, 'build.css.preprocessor', 'less');

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export function genPacakgeStyle() {
  // eslint-disable-next-line
  const styleDepsJson = require(STYPE_DEPS_JSON_FILE);

  const ext = '.' + getStyleExt();

  const content = styleDepsJson.sequence
    .map((name: string) => `@import "${join(SRC_DIR, `${name}/index${ext}`)}";`)
    .join('\n');

  writeFileSync(replaceExt(PACKAGE_STYLE_FILE, ext), content);
}
