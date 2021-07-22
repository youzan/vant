// @ts-ignore
import packageJson from '../package.json';
import { dev } from './commands/dev';
import { lint } from './commands/lint';
import { test } from './commands/jest';
import { clean } from './commands/clean';
import { build } from './commands/build';
import { release } from './commands/release';
import { changelog } from './commands/changelog';
import { buildSite } from './commands/build-site';
import { commitLint } from './commands/commit-lint';

export const cliVersion: string = packageJson.version;

process.env.VANT_CLI_VERSION = cliVersion;

export {
  dev,
  lint,
  test,
  clean,
  build,
  release,
  changelog,
  buildSite,
  commitLint,
};
