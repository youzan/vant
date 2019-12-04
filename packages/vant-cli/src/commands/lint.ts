import { lint as stylelint } from 'stylelint';
import { CLIEngine } from 'eslint';
import { getStepper } from '../common/logger';
import { SCRIPT_EXTS } from '../common/constant';

const stepper = getStepper(4);

function lintScript() {
  stepper.start('ESLint Start');

  const cli = new CLIEngine({
    fix: true,
    extensions: SCRIPT_EXTS
  });

  const report = cli.executeOnFiles(['src/']);
  const formatter = cli.getFormatter();

  CLIEngine.outputFixes(report);

  // output lint errors
  const formatted = formatter(report.results);
  if (formatted) {
    stepper.error('ESLint Failed', '\n' + formatter(report.results));
  } else {
    stepper.success('ESLint Passed');
  }
}

function lintStyle() {
  stepper.start('Stylelint Start');

  stylelint({
    fix: true,
    formatter: 'string',
    files: ['src/**/*.css', 'src/**/*.less', 'src/**/*.scss', 'src/**/*.vue']
  }).then(result => {
    if (result.errored) {
      stepper.error('Stylelint Failed', '\n' + result.output);
    } else {
      stepper.success('Stylelint Passed');
    }
  });
}

export function lint() {
  lintScript();
  lintStyle();
}
