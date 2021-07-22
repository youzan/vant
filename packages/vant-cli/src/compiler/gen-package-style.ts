import { join } from 'path';
import { existsSync } from 'fs-extra';
import { smartOutputFile, normalizePath } from '../common';
import { CSS_LANG, getCssBaseFile } from '../common/css';
import { SRC_DIR, STYLE_DEPS_JSON_FILE } from '../common/constant';

type Options = {
  outputPath: string;
  pathResolver?: (path: string) => string;
};

export function genPackageStyle(options: Options) {
  const styleDepsJson = require(STYLE_DEPS_JSON_FILE);
  const ext = '.' + CSS_LANG;

  let content = '';

  let baseFile = getCssBaseFile();
  if (baseFile) {
    if (options.pathResolver) {
      baseFile = options.pathResolver(baseFile);
    }

    content += `@import "${normalizePath(baseFile)}";\n`;
  }

  content += styleDepsJson.sequence
    .map((name: string) => {
      let path = join(SRC_DIR, `${name}/index${ext}`);

      if (!existsSync(path)) {
        return '';
      }

      if (options.pathResolver) {
        path = options.pathResolver(path);
      }

      return `@import "${normalizePath(path)}";`;
    })
    .filter((item: string) => !!item)
    .join('\n');

  smartOutputFile(options.outputPath, content);
}
