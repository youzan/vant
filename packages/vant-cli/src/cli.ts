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
  .option('--gitTag', 'Generate git tag')
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
  .command('commit-lint <gitParams>')
  .description('Lint commit message')
  .action(async (gitParams) => {
    const { commitLint } = await import('./commands/commit-lint.js');
    return commitLint(gitParams);
  });

program.parse();
