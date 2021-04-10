#!/usr/bin/env node
import { command, parse, version } from 'commander';

import {
  dev,
  lint,
  test,
  clean,
  build,
  release,
  changelog,
  buildSite,
  commitLint,
  cliVersion,
} from '.';

version(`@vant/cli ${cliVersion}`);

command('dev').description('Run webpack dev server').action(dev);

command('lint').description('Run eslint and stylelint').action(lint);

command('test')
  .description('Run unit tests through jest')
  .option(
    '--watch',
    'Watch files for changes and rerun tests related to changed files'
  )
  .option(
    '--clearCache',
    'Clears the configured Jest cache directory and then exits'
  )
  .action(test);

command('clean').description('Clean all dist files').action(clean);

command('build')
  .description('Compile components in production mode')
  .option('--watch', 'Watch file change')
  .action(build);

command('release')
  .description('Compile components and release it')
  .option('--tag <tag>', 'Release tag')
  .action(release);

command('build-site')
  .description('Compile site in production mode')
  .action(buildSite);

command('changelog').description('Generate changelog').action(changelog);

command('commit-lint <gitParams>')
  .description('Lint commit message')
  .action(commitLint);

parse();
