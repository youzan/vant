/**
 * Build npm lib
 */
const shell = require('shelljs');
const signale = require('signale');

const { Signale } = signale;
const tasks = [
  'npm run bootstrap',
  'npm run lint',
  'npm run build:entry',
  'node build/build-components.js',
  'node build/build-style.js',
  'node build/build-style-entry.js',
  'cross-env NODE_ENV=production webpack --color --config build/webpack.build.js',
  'cross-env NODE_ENV=production webpack -p --color --config build/webpack.build.js'
];

tasks.forEach(task => {
  signale.start(task);

  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  shell.exec(`${task} --silent`);
  interactive.success(task);
});
