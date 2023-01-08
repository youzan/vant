import { execa } from 'execa';
import { consola } from './logger.js';
import { execSync } from 'child_process';
import { getVantConfig } from './constant.js';

let hasYarnCache: boolean;

export function hasYarn() {
  if (hasYarnCache === undefined) {
    try {
      execSync('yarn --version', { stdio: 'ignore' });
      hasYarnCache = true;
    } catch (e) {
      hasYarnCache = false;
    }
  }

  return hasYarnCache;
}

function getPackageManager() {
  const { build } = getVantConfig();

  if (build?.packageManager) {
    return build?.packageManager;
  }

  return hasYarn() ? 'yarn' : 'npm';
}

export async function installDependencies() {
  consola.info('Install Dependencies\n');

  try {
    const manager = getPackageManager();

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit',
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}
