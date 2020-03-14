import execa from 'execa';
import { ora } from '../common/logger';
import { SCRIPT_EXTS } from '../common/constant';

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
  const spinner = ora(messages.start).start();

  return new Promise(resolve => {
    execa(cmd, options, {
      env: { FORCE_COLOR: true },
    })
      .then(() => {
        spinner.succeed(messages.succeed);
        resolve(true);
      })
      .catch((err: any) => {
        spinner.fail(messages.failed);
        console.log(err.stdout);
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

function stylelint() {
  return runCommand(
    'stylelint',
    ['src/**/*.css', 'src/**/*.vue', 'src/**/*.less', 'src/**/*.sass', '--fix'],
    {
      start: 'Running stylelint...',
      succeed: 'Stylelint Passed.',
      failed: 'Stylelint failed!',
    }
  );
}

export async function lint() {
  const eslintPassed = await eslint();
  const stylelintPassed = await stylelint();

  if (!eslintPassed || !stylelintPassed) {
    process.exit(1);
  }
}
