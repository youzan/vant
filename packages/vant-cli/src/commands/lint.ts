import { start, error, success } from 'signale';
import { lint as stylelint } from 'stylelint';
import { CLIEngine } from 'eslint';

function lintScript() {
  start('ESLint Start');

  const cli = new CLIEngine({
    fix: true,
    extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx']
  });

  const report = cli.executeOnFiles(['src/']);
  const formatter = cli.getFormatter();

  CLIEngine.outputFixes(report);

  // output lint errors
  const formatted = formatter(report.results);
  if (formatted) {
    error('ESLint Failed');
    console.log(formatter(report.results));
  } else {
    success('ESLint Passed');
  }
}

function lintStyle() {
  start('Stylelint Start');

  stylelint({
    fix: true,
    formatter: 'string',
    files: ['src/**/*.css', 'src/**/*.less', 'src/**/*.scss', 'src/**/*.vue']
  }).then(result => {
    if (result.errored) {
      error('Stylelint Failed');
      console.log(result.output);
    } else {
      success('Stylelint Passed');
    }
  });
}

export function lint() {
  lintScript();
  lintStyle();
}
