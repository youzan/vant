/* eslint-disable no-use-before-define */
/**
 * Build style entry of all components
 */

import { sep, join, relative } from 'path';
import { existsSync, outputFileSync } from 'fs-extra';
import { getComponents } from '../common';
import { ES_DIR, LIB_DIR } from '../common/constant';
import dependencyTree from 'dependency-tree';

interface DependencyObj {
  [k: string]: DependencyObj;
}

const components = getComponents();

// replace seq for windows
function replaceSeq(path: string) {
  return path.split(sep).join('/');
}

function genEntry(component: string, filename: string, ext = '') {
  const deps = analyzeDeps(component).map(dep =>
    getStyleRelativePath(component, dep, ext)
  );

  const esEntry = join(ES_DIR, component, `style/${filename}`);
  const libEntry = join(LIB_DIR, component, `style/${filename}`);

  const esContent = deps.map(dep => `import '${dep}';`).join('\n');
  const libContent = deps.map(dep => `require('${dep}');`).join('\n');

  outputFileSync(esEntry, esContent);
  outputFileSync(libEntry, libContent);
}

// analyze component dependencies
function analyzeDeps(component: string) {
  const checkList = ['base'];

  search(
    dependencyTree({
      directory: ES_DIR,
      filename: join(ES_DIR, component, 'index.js'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  );

  checkList.push(component);

  return checkList.filter(checkStyleExists);
}

function search(tree: DependencyObj, component: string, checkList: string[]) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item =>
        key
          .replace(ES_DIR, '')
          .split('/')
          .includes(item)
      )
      .forEach(item => {
        if (!checkList.includes(item) && item !== component) {
          checkList.push(item);
        }
      });
  });
}

function getStylePath(component: string, ext = '.css') {
  if (component === 'base') {
    return join(ES_DIR, `style/base${ext}`);
  }

  return join(ES_DIR, `${component}/index${ext}`);
}

function getStyleRelativePath(component: string, style: string, ext: string) {
  return replaceSeq(
    relative(join(ES_DIR, `${component}/style`), getStylePath(style, ext))
  );
}

function checkStyleExists(component: string) {
  return existsSync(getStylePath(component));
}

export function genStyleEntry() {
  components.forEach(component => {
    genEntry(component, 'index.js', '.css');
    genEntry(component, 'less.js', '.less');
  });
}
