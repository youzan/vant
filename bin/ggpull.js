const { execSync } = require('child_process');
const chalk = require('chalk');

const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' });
console.log(chalk.green(`拉取远程分支：git pull origin ${currentBranch}`));
execSync(`git pull origin ${currentBranch}`);
console.log();
