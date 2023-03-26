import { Command } from 'commander';

import { cliVersion } from './index.js';

const program = new Command();

program.version(`@vant/cli ${cliVersion}`);

program
  .command('dev')
  .description('Run dev server')
  .action(async () => {
    const { dev } = await import('./commands/dev.js');
    return dev();
  });

program
  .command('lint')
  .description('Run ESLint')
  .action(async () => {
    const { lint } = await import('./commands/lint.js');
    return lint();
  });

program
  .command('test')
  .description('Run unit tests through jest')
  .option(
    '--watch',
    'Watch files for changes and rerun tests related to changed files'
  )
  .option(
    '--clearCache',
    'Clears the configured Jest cache directory and then exits'
  )
  .option(
    '--changedSince <changedSince>',
    'Runs tests related to the changes since the provided branch or commit hash'
  )
  .option(
    '--logHeapUsage',
    'Logs the heap usage after every test. Useful to debug memory leaks'
  )
  .option(
    '--runInBand',
    'Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests'
  )
  .option(
    '--updateSnapshot',
    'Re-record every snapshot that fails during this test run'
  )
  .option('--debug', 'Print debugging info about your Jest config')
  .action(async (options) => {
    const { test } = await import('./commands/jest.js');
    return test(options);
  });

program
  .command('clean')
  .description('Clean all dist files')
  .action(async () => {
    const { clean } = await import('./commands/clean.js');
    return clean();
  });

program
  .command('build')
  .description('Compile components in production mode')
  .action(async () => {
    const { build } = await import('./commands/build.js');
    return build();
  });

program
  .command('release')
  .description('Compile components and release it')
  .option('--tag <tag>', 'Release tag')
  .action(async (options) => {
    const { release } = await import('./commands/release.js');
    return release(options);
  });

program
  .command('build-site')
  .description('Compile site in production mode')
  .action(async () => {
    const { buildSite } = await import('./commands/build-site.js');
    return buildSite();
  });

program
  .command('changelog')
  .description('Generate changelog')
  .action(async () => {
    const { changelog } = await import('./commands/changelog.js');
    return changelog();
  });

program
  .command('commit-lint <gitParams>')
  .description('Lint commit message')
  .action(async (gitParams) => {
    const { commitLint } = await import('./commands/commit-lint.js');
    return commitLint(gitParams);
  });

program.parse();
