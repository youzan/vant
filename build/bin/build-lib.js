/**
 * Build npm lib
 */
require('shelljs/global');
const signale = require('signale');
const tasks = [
  'lint',
  'build:entry',
  'build:components',
  'build:vant-css',
  'build:vant',
  'build:style-entry'
];

tasks.forEach(task => {
  signale.pending(task);
  exec(`npm run ${task} --silent`);
  signale.success(task);
});
