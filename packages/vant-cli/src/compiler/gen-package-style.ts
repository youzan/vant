import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { smartOutputFile, normalizePath } from '../common/index.js';
import { CSS_LANG, getCssBaseFile } from '../common/css.js';
import { SRC_DIR, STYLE_DEPS_JSON_FILE } from '../common/constant.js';

type Options = {
  outputPath?: string;
  pathResolver?: (path: string) => string;
};

export function genPackageStyle(options: Options = {}) {
  const require = createRequire(import.meta.url);
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

  if (options.outputPath) {
    smartOutputFile(options.outputPath, content);
  } else {
    return content;
  }
}
