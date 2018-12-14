/* eslint-disable no-use-before-define */
/**
 * Build style entry of all components
 */

const fs = require('fs-extra');
const path = require('path');
const dependencyTree = require('dependency-tree');
const components = require('./get-components')();

const whiteList = [
  'info',
  'icon',
  'loading',
  'cell',
  'cell-group',
  'button',
  'overlay'
];
const dir = path.join(__dirname, '../es');

function destEntryFile(component, filename, ext = '') {
  const deps = analyzeDependencies(component).map(dep => (
    getStyleRelativePath(component, dep, ext)
  ));

  const esEntry = path.join(dir, component, `style/${filename}`);
  const libEntry = path.join(
    __dirname,
    '../lib',
    component,
    `style/${filename}`
  );
  const esContent = deps.map(dep => `import '${dep}';`).join('\n');
  const libContent = deps.map(dep => `require('${dep}');`).join('\n');

  fs.outputFileSync(esEntry, esContent);
  fs.outputFileSync(libEntry, libContent);
}

// analyze component dependencies
function analyzeDependencies(component) {
  const checkList = ['base'];

  search(
    dependencyTree({
      directory: dir,
      filename: path.join(dir, component, 'index.js'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  );

  if (!whiteList.includes(component)) {
    checkList.push(component);
  }

  return checkList.filter(item => checkComponentHasStyle(item));
}

function search(tree, component, checkList) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item => (
        key
          .replace(dir, '')
          .split('/')
          .includes(item)
      ))
      .forEach(item => {
        if (
          !checkList.includes(item) &&
          !whiteList.includes(item) &&
          item !== component
        ) {
          checkList.push(item);
        }
      });
  });
}

function getStylePath(component, ext = '.css') {
  if (component === 'base') {
    return path.join(__dirname, `../es/style/base${ext}`);
  }
  return path.join(__dirname, `../es/${component}/index${ext}`);
}

function getStyleRelativePath(component, style, ext) {
  return path.relative(
    path.join(__dirname, `../es/${component}/style`),
    getStylePath(style, ext)
  );
}

function checkComponentHasStyle(component) {
  return fs.existsSync(getStylePath(component));
}

components.forEach(component => {
  // css entry
  destEntryFile(component, 'index.js', '.css');
  // less entry
  destEntryFile(component, 'less.js', '.less');
});
