/**
 * Build style entry of all components
 */

import dependencyTree from 'dependency-tree';
import { join } from 'path';
import { existsSync, writeFileSync } from 'fs';
import { getComponents } from '../common';
import { ES_DIR, STYPE_DEPS_JSON_FILE } from '../common/constant';

interface DependencyObj {
  [k: string]: DependencyObj;
}

const components = getComponents();

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

function getStylePath(component: string) {
  return join(ES_DIR, `${component}/index.css`);
}

function checkStyleExists(component: string) {
  return existsSync(getStylePath(component));
}

// analyze component dependencies
function analyzeDeps(component: string) {
  const checkList: string[] = [];

  search(
    dependencyTree({
      directory: ES_DIR,
      filename: join(ES_DIR, component, 'index.js'),
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

export function genStyleDepsMap() {
  const map = {} as DepsMap;

  components.filter(checkStyleExists).forEach(component => {
    map[component] = analyzeDeps(component);
  });

  const sequence = getSequence(map);

  Object.keys(map).forEach(key => {
    map[key] = map[key].sort(
      (a, b) => sequence.indexOf(a) - sequence.indexOf(b)
    );
  });

  writeFileSync(
    STYPE_DEPS_JSON_FILE,
    JSON.stringify({ map, sequence }, null, 2)
  );
}
