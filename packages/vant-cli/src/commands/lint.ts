import { exec } from 'child_process';
import { logger } from 'rslog';
import { SCRIPT_EXTS } from '../common/constant.js';

type RunCommandMessages = {
  start: string;
  succeed: string;
  failed: string;
};

function runCommand(cmd: string, messages: RunCommandMessages) {
  logger.start(messages.start);

  return new Promise((resolve) => {
    const options = {
      env: Object.assign({}, process.env, { FORCE_COLOR: 'true' }),
    };

    exec(cmd, options, (error, stdout, stderr) => {
      if (error) {
        logger.error(stderr || stdout);
        logger.error(messages.failed);
        resolve(false);
      } else {
        logger.success(messages.succeed);
        resolve(true);
      }
    });
  });
}

function eslint() {
  return runCommand(`eslint ./src --fix --ext ${SCRIPT_EXTS.join(',')}`, {
    start: 'Running eslint...',
    succeed: 'ESLint Passed.',
    failed: 'ESLint failed!',
  });
}

export async function lint() {
  const eslintPassed = await eslint();

  if (!eslintPassed) {
    process.exit(1);
  }
}
