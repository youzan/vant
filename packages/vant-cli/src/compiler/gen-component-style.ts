/**
 * Build style entry of all components
 */

import fse from 'fs-extra';
import { createRequire } from 'node:module';
import { sep, join, relative } from 'node:path';
import { getComponents, replaceExt } from '../common/index.js';
import { CSS_LANG, getCssBaseFile } from '../common/css.js';
import { checkStyleExists } from './gen-style-deps-map.js';
import {
  ES_DIR,
  SRC_DIR,
  LIB_DIR,
  getVantConfig,
  STYLE_DEPS_JSON_FILE,
} from '../common/constant.js';

function getDeps(component: string): string[] {
  const require = createRequire(import.meta.url);
  const styleDepsJson = require(STYLE_DEPS_JSON_FILE);

  if (styleDepsJson.map[component]) {
    const deps = styleDepsJson.map[component].slice(0);

    if (checkStyleExists(component)) {
      deps.push(component);
    }

    return deps;
  }

  return [];
}

function getPath(component: string, ext = '.css') {
  return join(ES_DIR, `${component}/index${ext}`);
}

function getRelativePath(component: string, style: string, ext: string) {
  return relative(join(ES_DIR, `${component}/style`), getPath(style, ext));
}

const OUTPUT_CONFIG = [
  {
    dir: ES_DIR,
    template: (dep: string) => `import '${dep}';`,
  },
  {
    dir: LIB_DIR,
    template: (dep: string) => `require('${dep}');`,
  },
];

function genEntry(params: {
  ext: string;
  filename: string;
  component: string;
  baseFile: string | null;
}) {
  const { ext, filename, component, baseFile } = params;
  const deps = getDeps(component);
  const depsPath = deps.map((dep) => getRelativePath(component, dep, ext));

  OUTPUT_CONFIG.forEach(({ dir, template }) => {
    const outputDir = join(dir, component, 'style');
    const outputFile = join(outputDir, filename);

    let content = '';

    if (baseFile) {
      const compiledBaseFile = replaceExt(baseFile.replace(SRC_DIR, dir), ext);
      content += template(relative(outputDir, compiledBaseFile));
      content += '\n';
    }

    content += depsPath.map(template).join('\n');
    content = content.replace(new RegExp('\\' + sep, 'g'), '/');
    fse.outputFileSync(outputFile, content);
  });
}

export function genComponentStyle(
  options: { cache: boolean } = { cache: true },
) {
  if (!options.cache) {
    const require = createRequire(import.meta.url);
    delete require.cache[STYLE_DEPS_JSON_FILE];
  }

  const vantConfig = getVantConfig();
  const components = getComponents();
  const baseFile = getCssBaseFile();
  const hasSourceFile = vantConfig.build?.css?.removeSourceFile !== true;

  components.forEach((component) => {
    genEntry({
      baseFile,
      component,
      filename: 'index.js',
      ext: '.css',
    });

    if (CSS_LANG !== 'css' && hasSourceFile) {
      genEntry({
        baseFile,
        component,
        filename: CSS_LANG + '.js',
        ext: '.' + CSS_LANG,
      });
    }
  });
}
