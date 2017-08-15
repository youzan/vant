/**
 * Build npm lib
 * Steps:
 * 1. 清理目录
 * 2. 构建 JS 入口文件
 * 3. 代码格式校验
 * 4. 构建每个组件对应的 [component].js
 * 5. 构建 vant-css
 * 6. 生成每个组件目录下的 style 入口
 * 7. 编译 utils
 * 8. 打包 JS 文件：vant.js && vant.min.js
 */

const fs = require('fs');
const path = require('path');
const components = require('../../components.json');
const chalk = require('chalk');
require('shelljs/global');

// 1. clean dir
log('Starting', 'clean');
exec('npm run clean --silent');
log('Finished', 'clean');

// 2. build entry
log('Starting', 'build:entry');
exec('npm run build:file --silent');
log('Finished', 'build:entry');

// 3. lint 
log('Starting', 'lint');
exec('npm run lint --silent');
log('Finished', 'lint');

// 4. build [component].js
log('Starting', 'build:component');
exec('npm run build:components --silent');
log('Finished', 'build:component');

// 5. build vant-css
log('Starting', 'build:vant-css');
exec('npm run build:vant-css --silent');
log('Finished', 'build:vant-css');

// 6. build style entrys
log('Starting', 'build:style-entries');
Object.keys(components).forEach((componentName) => {
  const dir = path.join(__dirname, '../../lib/', componentName, '/style');
  const file = path.join(dir, 'index.js');
  const cssPath = path.join(__dirname, '../../lib/vant-css/', `${componentName}.css`);
  const content = [];
  if (fs.existsSync(cssPath)) {
    content.push(`require('../../vant-css/${componentName}.css');`);
  }
  mkdir(dir);
  writeFile(file, content.join('\n'));
});
log('Finished', 'build:style-entries');

// 7. build utils 
log('Starting', 'build:utils');
exec('cross-env BABEL_ENV=utils babel packages/utils --out-dir lib/utils');
exec('cross-env BABEL_ENV=utils babel packages/mixins --out-dir lib/mixins');
log('Finished', 'build:utils');

// 8. build vant.js 
log('Starting', 'build:vant');
exec('npm run build:vant --silent');
log('Finished', 'build:vant');


// helpers
function log(status, action, breakLine) {
  const now = new Date();
  const clock = `${breakLine ? '\n' : ''}[${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}]`;
  console.log(`${chalk.gray(clock)} ${status} '${action ? chalk.cyan.bold(action ) : ''}'`);
}

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function writeFile(pathname, content) {
  if (!fs.existsSync(pathname)) {
    fs.closeSync(fs.openSync(pathname, 'w'));
  }
  fs.writeFileSync(pathname, content, { encoding: 'utf8' });
}

function mkdir(pathname) {
  if (!fs.existsSync(pathname)) {
    fs.mkdirSync(pathname);
  }
}
