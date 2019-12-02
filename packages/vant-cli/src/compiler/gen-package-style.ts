import { join } from 'path';
import { writeFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import { CSS_LANG, getCssBaseFile } from '../common/css';
import {
  SRC_DIR,
  PACKAGE_STYLE_FILE,
  STYPE_DEPS_JSON_FILE
} from '../common/constant';

export function genPacakgeStyle() {
  const styleDepsJson = require(STYPE_DEPS_JSON_FILE);
  const ext = '.' + CSS_LANG;

  let content = '';

  const baseFile = getCssBaseFile();
  if (baseFile) {
    content += `@import "${baseFile}";\n`;
  }

  content += styleDepsJson.sequence
    .map((name: string) => `@import "${join(SRC_DIR, `${name}/index${ext}`)}";`)
    .join('\n');

  writeFileSync(replaceExt(PACKAGE_STYLE_FILE, ext), content);
}
