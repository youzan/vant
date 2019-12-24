#!/usr/bin/env node

import { command, parse } from 'commander';
import { dev } from './commands/dev';
import { lint } from './commands/lint';
import { test } from './commands/jest';
import { clean } from './commands/clean';
import { build } from './commands/build';
import { release } from './commands/release';
import { changelog } from './commands/changelog';
import { buildSite } from './commands/build-site';
import { commitLint } from './commands/commit-lint';

command('dev').action(dev);

command('lint').action(lint);

command('clean').action(clean);

command('build')
  .option('--watch', 'Watch file change')
  .action(build);

command('release').action(release);

command('changelog <dir>')
  .option('--tag [tag]', 'Since tag')
  .action(changelog);

command('build-site').action(buildSite);

command('commit-lint').action(commitLint);

command('test')
  .option('--watch')
  .option('--clearCache')
  .action(test);

parse(process.argv);
