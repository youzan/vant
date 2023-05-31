const { execSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');
const pkg = require('../package.json');
const { docs } = require('../vusion.config');

const distDic = `mobile-ui@${pkg.version}`;
execSync(`rm -rf ${distDic}`);
console.log(chalk.green(`删除文件夹 ${distDic} 成功！`));

fs.mkdirSync(`${distDic}`);
console.log(chalk.green(`新建空文件夹 ${distDic} 成功！`));

function copyFolder(sourceFolder, destinationFolder) {
  if (!fs.existsSync(sourceFolder))
    return;
  if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder, { recursive: true });
  }
  fs.readdirSync(sourceFolder).forEach((file) => {
    const sourceFilePath = `${sourceFolder}/${file}`;
    const destinationFilePath = `${destinationFolder}/${file}`;
    if (fs.lstatSync(sourceFilePath).isDirectory()) {
      copyFolder(sourceFilePath, destinationFilePath);
    } else {
      fs.copyFileSync(sourceFilePath, destinationFilePath);
    }
  });
}

if (fs.existsSync('dist-theme')) {
  console.log(chalk.white('dist-theme 构建结果存在。'));
} else {
  console.log(chalk.white('执行构建脚本 npm run build:vusion'));
  execSync('npm run build:vusion');
  console.log(chalk.green('构建结束！'));
}
copyFolder('dist-theme', `${distDic}/dist-theme`);
console.log(chalk.green('dist-theme 复制成功！'));

const components = docs.components
  .filter((component) => !component.href && !component.path && !component.deprecated);

components.forEach((component) => {
    copyFolder(`src/${component.name}/screenshots`, `${distDic}/src/${component.name}/screenshots`);
    copyFolder(`src/${component.name}/drawings`, `${distDic}/src/${component.name}/drawings`);
    if (component.vusion) {
      copyFolder(`src-vusion/components/${component.name}/screenshots`, `${distDic}/src-vusion/components/${component.name}/screenshots`);
      copyFolder(`src-vusion/components/${component.name}/drawings`, `${distDic}/src-vusion/components/${component.name}/drawings`);
    }
});
console.log(chalk.green('组件内部图片复制成功！'));