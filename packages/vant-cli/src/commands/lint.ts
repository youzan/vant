import { execa } from 'execa';
import { consola, createSpinner } from '../common/logger.js';
import { SCRIPT_EXTS } from '../common/constant.js';

type RunCommandMessages = {
  start: string;
  succeed: string;
  failed: string;
};

function runCommand(
  cmd: string,
  options: string[],
  messages: RunCommandMessages
) {
  const spinner = createSpinner(messages.start).start();

  return new Promise((resolve) => {
    execa(cmd, options, {
      preferLocal: true,
      env: { FORCE_COLOR: 'true' },
    })
      .then(() => {
        spinner.success({ text: messages.succeed });
        resolve(true);
      })
      .catch((err: any) => {
        spinner.error({ text: messages.failed });
        consola.error(err.stderr || err.stdout);
        resolve(false);
      });
  });
}

function eslint() {
  return runCommand(
    'eslint',
    ['./src', '--fix', '--ext', SCRIPT_EXTS.join(',')],
    {
      start: 'Running eslint...',
      succeed: 'ESLint Passed.',
      failed: 'ESLint failed!',
    }
  );
}

export async function lint() {
  const eslintPassed = await eslint();

  if (!eslintPassed) {
    process.exit(1);
  }
}
