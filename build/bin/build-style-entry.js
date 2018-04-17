/**
 * Build style entry of all components
 */

const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components')();
const dependencyTree = require('dependency-tree');
const SEP = path.sep;

function build(folder, isESModule) {
  const dir = path.resolve(__dirname, '../../', folder);
  components.forEach(componentName => {
    const content = analyzeDependencies(componentName, dir)
      .map(component => isESModule ? `import '../../vant-css/${component}.css';` : `require('../../vant-css/${component}.css');`);
    fs.outputFileSync(path.join(dir, componentName, './style/index.js'), content.join('\n'));
  });

  // Analyze component dependencies
  function analyzeDependencies(componentName, dir) {
    const checkList = ['base'];
    const whiteList = ['icon', 'loading', 'cell', 'button'];
    search(dependencyTree({
      directory: dir,
      filename: path.resolve(dir, componentName, 'index.js'),
      filter: path => path.indexOf(`vant${SEP}${folder}${SEP}`) !== -1
    }), checkList, whiteList);
    return checkList.filter(component => checkComponentHasStyle(component));
  }

  function search(tree, checkList, whiteList) {
    tree && Object.keys(tree).forEach(key => {
      search(tree[key], checkList, whiteList);
      const component = key.split(`${SEP}vant${SEP}${folder}${SEP}`)[1].replace(`${SEP}index.js`, '').replace(`mixins${SEP}`, '');
      if (checkList.indexOf(component) === -1 && whiteList.indexOf(component) === -1) {
        checkList.push(component);
      }
    });
  }

  function checkComponentHasStyle(componentName) {
    return fs.existsSync(path.join(__dirname, `../../${folder}/vant-css/`, `${componentName}.css`));
  }
}

build('es', true);
build('lib');
