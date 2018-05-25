/**
 * Build npm lib
 */
const signale = require('signale');
require('shelljs/global');

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
