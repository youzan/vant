/**
 * Build style entry of all components
 */

const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components')();
const dependencyTree = require('dependency-tree');
const whiteList = ['icon', 'loading', 'cell', 'button'];
const dir = path.join(__dirname, '../es');

components.forEach(component => {
  const deps = analyzeDependencies(component);
  const esEntry = path.join(dir, component, 'style/index.js');
  const libEntry = path.join(__dirname, '../lib', component, 'style/index.js');
  const esContent = deps.map(dep => `import '../../vant-css/${dep}.css';`).join('\n');
  const libContent = deps.map(dep => `require('../../vant-css/${dep}.css');`).join('\n');

  fs.outputFileSync(esEntry, esContent);
  fs.outputFileSync(libEntry, libContent);
});

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
      .filter(item => key.replace(dir, '').split('/').includes(item))
      .forEach(item => {
        if (!checkList.includes(item) && !whiteList.includes(item) && item !== component) {
          checkList.push(item);
        }
      });
  });
}

function checkComponentHasStyle(component) {
  return fs.existsSync(
    path.join(__dirname, `../es/vant-css/`, `${component}.css`)
  );
}
