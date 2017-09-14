/**
 * 生成每个组件目录下的 style 入口
 */

const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components')();
const source = require('../../lib/vant');

components.forEach(componentName => {
  const dependencies = analyzeDependencies(componentName);
  const styleDir = path.join(__dirname, '../../lib/', componentName, '/style');
  const content = dependencies.map(component => `require('../../vant-css/${component}.css');`);
  fs.outputFileSync(path.join(styleDir, './index.js'), content.join('\n'));
});

// 递归分析组件依赖
// 样式引入顺序：基础样式, 组件依赖样式，组件本身样式
function analyzeDependencies(componentName) {
  const checkList = ['base'];
  const search = component => {
    const componentSource = source[toPascal(component)];  
    if (componentSource && componentSource.components) {
      Object.keys(componentSource.components).forEach(name => {
        name = name.replace('van-', '');
        if (checkList.indexOf(name) === -1) {
          search(name);
        }
      });
    }
    if (checkList.indexOf(component) === -1) {
      checkList.push(component);
    }
  }

  search(componentName);
  return checkList.filter(component => checkComponentHasStyle(component));
}

// 判断组件是否有样式
function checkComponentHasStyle(componentName) {
  const cssPath = path.join(__dirname, '../../lib/vant-css/', `${componentName}.css`);
  return fs.existsSync(cssPath);
}

function toPascal(str) {
  return ('_' + str).replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}
