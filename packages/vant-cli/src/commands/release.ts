import fse from 'fs-extra';
import { join } from 'node:path';
import color from 'picocolors';
import enquirer from 'enquirer';
import { consola } from '../common/logger.js';
import { getPackageManager } from '../common/manager.js';
import { execSync } from 'child_process';

function logCurrentVersion(cwd: string) {
  const pkgJson = join(cwd, 'package.json');
  const pkg = fse.readJSONSync(pkgJson);
  consola.success(`${color.bold('Current package:')} ${color.green(pkg.name)}`);
  consola.success(
    `${color.bold('Current version:')} ${color.green(pkg.version)}`,
  );
  return pkg.name;
}

async function getNewVersion() {
  const { version } = await enquirer.prompt<{ version: string }>({
    type: 'input',
    name: 'version',
    message: 'Version to release:',
  });
  return version;
}

function getNpmTag(version: string, forceTag?: string) {
  let tag: string;

  if (forceTag) {
    tag = forceTag;
  } else if (version.includes('beta')) {
    tag = 'beta';
  } else if (version.includes('alpha')) {
    tag = 'alpha';
  } else if (version.includes('rc')) {
    tag = 'rc';
  } else {
    tag = 'latest';
  }

  consola.success(`${color.bold('Npm tag:')} ${color.green(tag)}`);

  return tag;
}

function setPkgVersion(version: string, cwd: string) {
  const pkgJson = join(cwd, 'package.json');
  const pkg = fse.readJSONSync(pkgJson);
  pkg.version = version;
  fse.writeJSONSync(pkgJson, pkg, { spaces: 2 });
}

function buildPackage(packageManager: string) {
  const command = `${packageManager} run build`;
  consola.success(`${color.bold('Build package:')} ${color.green(command)}`);
  execSync(command, { stdio: 'inherit' });
}

function generateChangelog() {
  execSync('vant-cli changelog', { stdio: 'inherit' });
}

function publishPackage(packageManager: string, tag: string) {
  let command = `${packageManager} publish --tag ${tag}`;

  if (packageManager === 'pnpm') {
    command += ' --no-git-checks';
  }

  execSync(command, { stdio: 'inherit' });
}

function commitChanges(pkgName: string, version: string) {
  const message = `release: ${pkgName} v${version}`;
  execSync(`git add -A && git commit -m "${message}"`, { stdio: 'inherit' });
}

export async function release(command: { tag?: string }) {
  const cwd = process.cwd();
  const pkgName = logCurrentVersion(cwd);
  const version = await getNewVersion();
  const tag = getNpmTag(version, command.tag);
  const packageManager = getPackageManager();

  setPkgVersion(version, cwd);
  buildPackage(packageManager);
  generateChangelog();
  publishPackage(packageManager, tag);
  commitChanges(pkgName, version);
}
