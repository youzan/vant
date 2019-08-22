#!/usr/bin/env node

const commander = require('commander');
const changelog = require('./changelog');

commander
  .command('changelog <dir>')
  .option('--tag [tag]', 'Since tag')
  .action(changelog);

commander.parse(process.argv);
