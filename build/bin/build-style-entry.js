/**
 * Build style entry of all components
 */

const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components')();
const dependencyTree = require('dependency-tree');
const SEP = path.sep;

components.forEach(componentName => {
  const esDir = path.resolve(__dirname, '../../es');
  const content = analyzeDependencies(componentName, esDir).map(component => `import '../../vant-css/${component}.css';`);
  fs.outputFileSync(path.join(esDir, componentName, './style/index.js'), content.join('\n'));
});

// Analyze component dependencies
function analyzeDependencies(componentName, esDir) {
  const checkList = ['base'];
  const whiteList = ['icon', 'loading', 'cell', 'button'];
  search(dependencyTree({
    directory: esDir,
    filename: path.resolve(esDir, componentName, 'index.js'),
    filter: path => path.indexOf(`vant${SEP}es${SEP}`) !== -1
  }), checkList, whiteList);
  return checkList.filter(component => checkComponentHasStyle(component));
}

function search(tree, checkList, whiteList) {
  tree && Object.keys(tree).forEach(key => {
    search(tree[key], checkList, whiteList);
    const component = key.split(`${SEP}vant${SEP}es${SEP}`)[1].replace(`${SEP}index.js`, '').replace(`mixins${SEP}`, '');
    if (checkList.indexOf(component) === -1 && whiteList.indexOf(component) === -1) {
      checkList.push(component);
    }
  });
}

function checkComponentHasStyle(componentName) {
  return fs.existsSync(path.join(__dirname, '../../es/vant-css/', `${componentName}.css`));
}
