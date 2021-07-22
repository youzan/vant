import { join } from 'path';
import { SCRIPT_EXTS } from '../common/constant';
import { readFileSync, existsSync } from 'fs-extra';

let depsMap: Record<string, string[]> = {};
let existsCache: Record<string, boolean> = {};

// https://regexr.com/47jlq
const IMPORT_RE = /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from(\s+)?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

function matchImports(code: string): string[] {
  const imports = code.match(IMPORT_RE) || [];
  return imports.filter((line) => !line.includes('import type'));
}

function exists(filePath: string) {
  if (!(filePath in existsCache)) {
    existsCache[filePath] = existsSync(filePath);
  }

  return existsCache[filePath];
}

export function fillExt(filePath: string) {
  for (let i = 0; i < SCRIPT_EXTS.length; i++) {
    const completePath = `${filePath}${SCRIPT_EXTS[i]}`;
    if (exists(completePath)) {
      return completePath;
    }
  }

  for (let i = 0; i < SCRIPT_EXTS.length; i++) {
    const completePath = `${filePath}/index${SCRIPT_EXTS[i]}`;
    if (exists(completePath)) {
      return completePath;
    }
  }

  return '';
}

function getPathByImport(code: string, filePath: string) {
  const divider = code.includes('"') ? '"' : "'";
  const relativePath = code.split(divider)[1];

  if (relativePath.includes('.')) {
    return fillExt(join(filePath, '..', relativePath));
  }

  return null;
}

export function clearDepsCache() {
  depsMap = {};
  existsCache = {};
}

export function getDeps(filePath: string) {
  if (depsMap[filePath]) {
    return depsMap[filePath];
  }

  const code = readFileSync(filePath, 'utf-8');
  const imports = matchImports(code);
  const paths = imports
    .map((item) => getPathByImport(item, filePath))
    .filter((item) => !!item) as string[];

  depsMap[filePath] = paths;

  paths.forEach(getDeps);

  return paths;
}

// "import App from 'App.vue';" => "import App from 'App.xxx';"
export function replaceScriptImportExt(code: string, from: string, to: string) {
  const importLines = matchImports(code);

  importLines.forEach((importLine) => {
    const result = importLine.replace(from, to);
    code = code.replace(importLine, result);
  });

  return code;
}
