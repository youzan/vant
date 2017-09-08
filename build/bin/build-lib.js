/**
 * Build npm lib
 * Steps:
 * 1. 代码格式校验
 * 2. 构建 JS 入口文件
 * 4. 构建每个组件对应的 [component].js
 * 4. 构建 vant-css
 * 5. 打包 JS 文件：vant.js && vant.min.js
 * 6. 生成每个组件目录下的 style 入口
 */

const chalk = require('chalk');
require('shelljs/global');

// 1. lint 
log('Starting', 'lint');
exec('npm run lint --silent');
log('Finished', 'lint');

// 2. build entry
log('Starting', 'build:entry');
exec('npm run build:file --silent');
log('Finished', 'build:entry');

// 3. build [component].js
log('Starting', 'build:component');
exec('npm run build:components --silent');
log('Finished', 'build:component');

// 4. build vant-css
log('Starting', 'build:vant-css');
exec('npm run build:vant-css --silent');
log('Finished', 'build:vant-css');

// 5. build vant.js 
log('Starting', 'build:vant');
exec('npm run build:vant --silent');
log('Finished', 'build:vant');

// 6. build style entrys
log('Starting', 'build:style-entries');
exec('npm run build:style-entry --silent');
log('Finished', 'build:style-entries');

// helpers
function log(status, action, breakLine) {
  const now = new Date();
  const clock = `${breakLine ? '\n' : ''}[${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}]`;
  console.log(`${chalk.gray(clock)} ${status} '${action ? chalk.cyan.bold(action ) : ''}'`);
}

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}
