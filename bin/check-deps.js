const path = require('path');
const fse = require('fs-extra');
const semver = require('semver');
const inquirer = require('inquirer');
const { execSync } = require('child_process');
const chalk = require('chalk');

// 当前命令所在目录
const cwd = process.cwd();
const packageJsonName = 'package.json';
const depsDirName = 'node_modules';
// package.json定义文件所在路径
const packageJsonPath = path.resolve(cwd, packageJsonName);
// 安装包所在文件夹
const depsDirPath = path.resolve(cwd, depsDirName);

if (fse.existsSync(packageJsonPath)) {
    // package.json定义文件
    const packageJson = fse.readJSONSync(packageJsonPath);
    const { dependencies } = packageJson || {};
    // 没通过校验的依赖包
    const unExpectedDeps = [];
    for (const dependenceName in dependencies) {
        if (Object.hasOwnProperty.call(dependencies, dependenceName)) {
            // 定义的版本
            const expected = dependencies[dependenceName];
            // 安装包的package.json定义文件所在路径
            const dependencePackageJsonPath = path.resolve(
                depsDirPath,
                dependenceName,
                packageJsonName,
            );
            // 本地是否安装了包
            if (fse.existsSync(dependencePackageJsonPath)) {
                const dependencePackageJson = fse.readJSONSync(
                    dependencePackageJsonPath,
                );
                const { version } = dependencePackageJson || {};
                if (!semver.satisfies(version, expected)) {
                    unExpectedDeps.push({
                        dependenceName,
                        version,
                        expected,
                    });
                }
            } else {
                unExpectedDeps.push({
                    unInstalled: true,
                    dependenceName,
                    expected,
                });
            }
        }
    }
    if (unExpectedDeps.length) {
        console.log(chalk.red('【重要】（请仔细阅读!!!）'));
        console.log(
            `${unExpectedDeps
                .map(
                    ({ dependenceName, version, expected, unInstalled }) => `
${chalk.green(dependenceName)}
${unInstalled ? '当前未安装' : `当前安装版本: ${chalk.red(version)}`}
package.json 定义的版本: ${chalk.red(expected)}
`,
                )
                .join('\n--------------------------------------------\n')}`,
        );
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'install',
                    message: chalk.red('是否重新安装当前项目依赖?'),
                    default: true,
                },
            ])
            .then(({ install }) => {
                // 执行安装
                if (install) {
                    execSync('npm install', {
                        stdio: 'inherit',
                    });

                    console.log(
                        `${unExpectedDeps
                            .map(({ dependenceName }) => {
                                const dependencePackageJsonPath = path.resolve(
                                    depsDirPath,
                                    dependenceName,
                                    packageJsonName,
                                );
                                const dependencePackageJson = fse.readJSONSync(
                                    dependencePackageJsonPath,
                                );
                                const { version: newVersion }
                                    = dependencePackageJson || {};
                                return `${chalk.green(
                                    dependenceName,
                                )}: ${chalk.red(newVersion)} 安装成功!`;
                            })
                            .join(``)}`,
                    );
                } else {
                    console.log(`
当前使用:${unExpectedDeps
        .map(
            ({ dependenceName, version, unInstalled }) => `
${chalk.green(dependenceName)}: ${chalk.red(unInstalled ? '未安装' : version)}`,
        )
        .join('')}`);
                }
            });
    } else {
        console.log(chalk.green('依赖包版本检查通过'));
    }
}
