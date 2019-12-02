import { lint as stylelint } from 'stylelint';
import { CLIEngine } from 'eslint';
import { logger } from '../common';
import { SCRIPT_EXTS } from '../common/constant';

function lintScript() {
  logger.start('ESLint Start');

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
    logger.error('ESLint Failed');
    console.log(formatter(report.results));
  } else {
    logger.success('ESLint Passed');
  }
}

function lintStyle() {
  logger.start('Stylelint Start');

  stylelint({
    fix: true,
    formatter: 'string',
    files: ['src/**/*.css', 'src/**/*.less', 'src/**/*.scss', 'src/**/*.vue']
  }).then(result => {
    if (result.errored) {
      logger.error('Stylelint Failed');
      console.log(result.output);
    } else {
      logger.success('Stylelint Passed');
    }
  });
}

export function lint() {
  lintScript();
  lintStyle();
}
