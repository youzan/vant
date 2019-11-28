/**
 * Build style entry of all components
 */

import { join } from 'path';
import { existsSync, writeFileSync } from 'fs-extra';
import { getComponents } from '../common';
import { ES_DIR, STYPE_DEPS_MAP_FILE } from '../common/constant';
import dependencyTree from 'dependency-tree';

interface DependencyObj {
  [k: string]: DependencyObj;
}

const components = getComponents();
const STYLE_EXTS = ['.css', '.less', '.scss'];
const JS_EXTS = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

function getStylePath(component: string, ext = '.css'): string {
  return join(ES_DIR, `${component}/index${ext}`);
}

function checkStyleExists(component: string): boolean {
  return STYLE_EXTS.some(ext => existsSync(getStylePath(component, ext)));
}

function getScriptPath(component: string): string {
  for (let i = 0; i < JS_EXTS.length; i++) {
    const path = join(ES_DIR, component, `index${JS_EXTS[i]}`);
    if (existsSync(path)) {
      return path;
    }
  }

  return '';
}

function matchPath(path: string, component: string): boolean {
  return path
    .replace(ES_DIR, '')
    .split('/')
    .includes(component);
}

function search(tree: DependencyObj, component: string, checkList: string[]) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item => matchPath(key, item))
      .forEach(item => {
        if (!checkList.includes(item) && item !== component) {
          checkList.push(item);
        }
      });
  });
}

// analyze component dependencies
function analyzeDeps(component: string) {
  const checkList: string[] = [];
  const filename = getScriptPath(component);

  if (!filename) {
    return [];
  }

  search(
    dependencyTree({
      filename,
      directory: ES_DIR,
      filter: path => !~path.indexOf('node_modules'),
      detective: {
        es6: {
          mixedImports: true
        }
      }
    }),
    component,
    checkList
  );

  checkList.push(component);

  return checkList.filter(checkStyleExists);
}

export function genStyleDepsMap() {
  const map = components.reduce((map, component) => {
    map[component] = analyzeDeps(component);
    return map;
  }, {} as Record<string, string[]>);

  const content = JSON.stringify(map, null, 2);

  writeFileSync(STYPE_DEPS_MAP_FILE, content);
}
