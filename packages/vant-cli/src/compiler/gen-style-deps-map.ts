import { join } from 'path';
import { CSS_LANG } from '../common/css';
import { existsSync } from 'fs-extra';
import { getDeps, clearDepsCache, fillExt } from './get-deps';
import { getComponents, smartOutputFile } from '../common';
import { SRC_DIR, STYPE_DEPS_JSON_FILE } from '../common/constant';

const components = getComponents();

function matchPath(path: string, component: string): boolean {
  return path
    .replace(SRC_DIR, '')
    .split('/')
    .includes(component);
}

function getStylePath(component: string) {
  return join(SRC_DIR, `${component}/index.${CSS_LANG}`);
}

export function checkStyleExists(component: string) {
  return existsSync(getStylePath(component));
}

// analyze component dependencies
function analyzeComponentDeps(component: string) {
  const checkList: string[] = [];
  const componentEntry = fillExt(join(SRC_DIR, component, 'index'));
  const record = new Set();

  function search(filePath: string) {
    record.add(filePath);

    getDeps(filePath).forEach(key => {
      if (record.has(key)) {
        return;
      }

      search(key);
      components
        .filter(item => matchPath(key, item))
        .forEach(item => {
          if (!checkList.includes(item) && item !== component) {
            checkList.push(item);
          }
        });
    });
  }

  search(componentEntry);

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
    clearDepsCache();

    const map = {} as DepsMap;

    components.forEach(component => {
      map[component] = analyzeComponentDeps(component);
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
}
