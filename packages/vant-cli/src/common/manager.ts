import fs from 'fs-extra';
import execa from 'execa';
import { join } from 'path';
import { consola } from './logger.js';
import { execSync } from 'child_process';
import { ROOT } from './constant.js';

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

function isUsingPnpm() {
  const pnpmLock = join(ROOT, 'pnpm-lock.yaml');
  return fs.existsSync(pnpmLock);
}

export async function installDependencies() {
  consola.info('Install Dependencies\n');

  try {
    const manager = isUsingPnpm() ? 'pnpm' : hasYarn() ? 'yarn' : 'npm';

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit',
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}
