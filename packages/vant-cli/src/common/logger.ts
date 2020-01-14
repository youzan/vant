import chalk from 'chalk';
import logger from 'signale';
import { ROOT } from '../common/constant';

logger.config({
  displayTimestamp: true
});

const methods = ['success', 'start', 'error'] as const;

type Stepper = Pick<typeof logger, typeof methods[number]>;

export function getStepper(totalStep: number) {
  const stepper = {} as Stepper;
  let currentStep = 0;

  methods.forEach(key => {
    stepper[key] = (message, ...args) => {
      const prefix = `[${++currentStep}/${totalStep}] `;
      return logger[key](prefix + message, ...args);
    };
  });

  return stepper;
}

export function getInteractiveLogger() {
  const interactive = new logger.Signale({
    interactive: true,
    config: {
      displayTimestamp: true
    }
  });

  return interactive;
}

export function simplifyPath(path: string) {
  return chalk.yellow(path.replace(ROOT, '.'));
}

export { logger };
