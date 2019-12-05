/**
 * Build style entry of all components
 */

import dependencyTree from 'dependency-tree';
import { join } from 'path';
import { compileJs } from './compile-js';
import { compileSfc } from './compile-sfc';
import { CSS_LANG } from '../common/css';
import { SRC_DIR, DIST_DIR, STYPE_DEPS_JSON_FILE } from '../common/constant';
import { copySync, existsSync, readdirSync } from 'fs-extra';
import {
  isDir,
  isSfc,
  isScript,
  getComponents,
  smartOutputFile
} from '../common';

interface DependencyObj {
  [k: string]: DependencyObj;
}

const components = getComponents();
const TEMP_DIR = join(DIST_DIR, 'temp');

function compileTempDir(dir: string): Promise<unknown> {
  const files = readdirSync(dir);

  return Promise.all(
    files.map(filename => {
      const filePath = join(dir, filename);

      if (isDir(filePath)) {
        if (filePath.includes('/test') || filePath.includes('/demo')) {
          return Promise.resolve();
        }

        return compileTempDir(filePath);
      }

      if (filename.includes('index')) {
        if (isSfc(filePath)) {
          return compileSfc(filePath, { skipStyle: true });
        }

        if (isScript(filePath)) {
          return compileJs(filePath);
        }
      }

      return Promise.resolve();
    })
  );
}

function matchPath(path: string, component: string): boolean {
  return path
    .replace(TEMP_DIR, '')
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

function getStylePath(component: string) {
  return join(TEMP_DIR, `${component}/index.${CSS_LANG}`);
}

function checkStyleExists(component: string) {
  return existsSync(getStylePath(component));
}

// analyze component dependencies
function analyzeDeps(component: string) {
  const checkList: string[] = [];

  search(
    dependencyTree({
      directory: TEMP_DIR,
      filename: join(TEMP_DIR, component, 'index.js'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  );

  return checkList.filter(checkStyleExists);
}

type DepsMap = Record<string, string[]>;

function getSequence(depsMap: DepsMap) {
  const sequence: string[] = [];
  const record = new Set();

  function add(item: string) {
    const deps = depsMap[item];

    if (sequence.includes(item) || !deps) {
      return;
    }

    if (record.has(item)) {
      sequence.push(item);
      return;
    }

    record.add(item);

    if (!deps.length) {
      sequence.push(item);
      return;
    }

    deps.forEach(add);

    if (sequence.includes(item)) {
      return;
    }

    const maxIndex = Math.max(...deps.map(dep => sequence.indexOf(dep)));

    sequence.splice(maxIndex + 1, 0, item);
  }

  components.forEach(add);

  return sequence;
}

export async function genStyleDepsMap() {
  return new Promise(resolve => {
    const map = {} as DepsMap;

    copySync(SRC_DIR, TEMP_DIR);
    compileTempDir(TEMP_DIR).then(() => {
      components.filter(checkStyleExists).forEach(component => {
        map[component] = analyzeDeps(component);
      });

      const sequence = getSequence(map);

      Object.keys(map).forEach(key => {
        map[key] = map[key].sort(
          (a, b) => sequence.indexOf(a) - sequence.indexOf(b)
        );
      });

      smartOutputFile(
        STYPE_DEPS_JSON_FILE,
        JSON.stringify({ map, sequence }, null, 2)
      );

      resolve();
    });
  });
}
