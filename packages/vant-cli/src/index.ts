#!/usr/bin/env node

import { command, parse } from 'commander';
import { dev } from './commands/dev';
import { test } from './commands/test';
import { lint } from './commands/lint';
import { clean } from './commands/clean';
import { build } from './commands/build';
import { release } from './commands/release';
import { changelog } from './commands/changelog';
import { commitLint } from './commands/commit-lint';

command('dev').action(dev);

command('lint').action(lint);

command('clean').action(clean);

command('build').action(build);

command('release').action(release);

command('changelog <dir>')
  .option('--tag [tag]', 'Since tag')
  .action(changelog);

command('commit-lint').action(commitLint);

command('test')
  .option('--watch')
  .action(test);

parse(process.argv);
