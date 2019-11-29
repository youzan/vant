/**
 * Build style entry of all components
 */

import { join, relative } from 'path';
import { outputFileSync } from 'fs-extra';
import { getComponents } from '../common';
import { getStyleExt } from './gen-package-style';
import { ES_DIR, LIB_DIR, STYPE_DEPS_JSON_FILE } from '../common/constant';

function getDeps(component: string): string[] {
  const styleDepsJson = require(STYPE_DEPS_JSON_FILE);

  if (styleDepsJson.map[component]) {
    return [...styleDepsJson.map[component], component];
  }

  return [];
}

function getPath(component: string, ext = '.css') {
  return join(ES_DIR, `${component}/index${ext}`);
}

function getRelativePath(component: string, style: string, ext: string) {
  return relative(join(ES_DIR, `${component}/style`), getPath(style, ext));
}

function genEntry(component: string, filename: string, ext = '') {
  const deps = getDeps(component);
  const depsPath = deps.map(dep => getRelativePath(component, dep, ext));

  const esEntry = join(ES_DIR, component, `style/${filename}`);
  const libEntry = join(LIB_DIR, component, `style/${filename}`);

  const esContent = depsPath.map(dep => `import '${dep}';`).join('\n');
  const libContent = depsPath.map(dep => `require('${dep}');`).join('\n');

  outputFileSync(esEntry, esContent);
  outputFileSync(libEntry, libContent);
}

export function genComponentStyle() {
  const ext = getStyleExt();
  const components = getComponents();

  components.forEach(component => {
    genEntry(component, 'index.js', '.css');

    if (ext !== 'css') {
      genEntry(component, ext + '.js', '.' + ext);
    }
  });
}
