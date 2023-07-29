import { join } from 'node:path';
import { SCRIPT_EXTS, STYLE_EXTS } from '../common/constant.js';
import { readFileSync, existsSync } from 'node:fs';

let depsMap: Record<string, string[]> = {};
let existsCache: Record<string, boolean> = {};

// https://regexr.com/47jlq
const IMPORT_RE =
  /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from(\s+)?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

const IMPORT_NOF_RE = /import\s*\(\s*?['"].+?['"]\)/g;

const EXPORT_FROM_RE =
  /@?export\s+?(?:(?:(?:[\w*\s{},]*)\s+from(\s+)?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

function matchImports(code: string): string[] {
  const imports = code.match(IMPORT_RE) || [];
  return imports.filter((line) => !line.includes('import type'));
}

function matchImportsNof(code: string): string[] {
  const imports = code.match(IMPORT_NOF_RE) || [];
  return imports.filter((line) => !line.includes('import type'));
}

function matchExportFroms(code: string): string[] {
  const exportFroms = code.match(EXPORT_FROM_RE) || [];
  return exportFroms.filter((line) => !line.includes('export type'));
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
      return {
        path: completePath,
        isIndex: false,
      };
    }
  }

  for (let i = 0; i < SCRIPT_EXTS.length; i++) {
    const completePath = `${filePath}/index${SCRIPT_EXTS[i]}`;
    if (exists(completePath)) {
      return {
        path: completePath,
        isIndex: true,
      };
    }
  }

  return {
    path: '',
    isIndex: false,
  };
}

function getImportRelativePath(code: string) {
  const divider = code.includes('"') ? '"' : "'";
  return code.split(divider)[1];
}

function getPathByImport(code: string, filePath: string) {
  const relativePath = getImportRelativePath(code);

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
    .map((item) => getPathByImport(item, filePath)?.path)
    .filter((item) => !!item) as string[];

  depsMap[filePath] = paths;

  paths.forEach(getDeps);

  return paths;
}

/**
 * 1. Replace .vue extension
 * @example "import App from 'App.vue';" => "import App from 'App.xxx';"
 * @example "defineAsyncComponent(() => import('../xxx.vue'))" => "defineAsyncComponent(() => import('../xxx.xxx'));"
 *
 * 2. if using .mjs or .cjs, complete the import path
 * @example import './foo' -> import './foo.mjs'
 * @example import './foo' -> import './foo/index.mjs'
 * @example "defineAsyncComponent(() => import('../foo.vue'))" => "defineAsyncComponent(() => import('../foo.mjs'));"
 */
export function replaceScriptImportExt(
  code: string,
  filePath: string,
  ext: string,
) {
  const imports = [
    ...matchImports(code),
    ...matchImportsNof(code),
    ...matchExportFroms(code),
  ];

  const updateImport = (index: number, newImport: string) => {
    code = code.replace(imports[index], newImport);
    imports[index] = newImport;
  };

  imports.forEach((line, index) => {
    if (line.includes('.vue')) {
      updateImport(index, line.replace('.vue', ext));
    }
  });

  if (ext === '.mjs' || ext === '.cjs') {
    imports.forEach((line, index) => {
      const isStyleImport = STYLE_EXTS.some((ext) => line.includes(ext));
      if (isStyleImport) {
        return;
      }

      const isExistExt = line.includes(ext);
      if (isExistExt) {
        return;
      }

      const pathInfo = getPathByImport(line, filePath);

      if (pathInfo) {
        const relativePath = getImportRelativePath(line);

        if (pathInfo.isIndex) {
          const newLine = line.replace(
            relativePath,
            `${relativePath}/index${ext}`,
          );

          updateImport(index, newLine);
        } else {
          const newLine = line.replace(relativePath, relativePath + ext);
          updateImport(index, newLine);
        }
      }
    });
  }

  return code;
}
