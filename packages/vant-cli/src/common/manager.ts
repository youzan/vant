import execa from 'execa';
import { consola } from './logger';
import { execSync } from 'child_process';

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

export async function installDependencies() {
  consola.info('Install Dependencies\n');

  try {
    const manager = hasYarn() ? 'yarn' : 'npm';

    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit',
    });

    console.log('');
  } catch (err) {
    console.log(err);
    throw err;
  }
}
