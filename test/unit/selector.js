/**
 * 运行单个测试文件
 */

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const shell = require('shelljs');
const files = fs.readdirSync(path.resolve(__dirname, './specs'));

inquirer.prompt([{
  type: 'list',
  name: 'select',
  message: '请选择要运行的测试文件：',
  choices: files
}]).then(result => {
  const file = result.select.replace('.spec.js', '');
  shell.exec('karma start test/unit/karma.conf.js --color alway --file ' + file);
}).catch(error => {
  console.log(error);
});
