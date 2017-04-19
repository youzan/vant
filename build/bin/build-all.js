'use strict';

const components = require('../../components.json');
const execSync = require('child_process').execSync;
const existsSync = require('fs').existsSync;
const path = require('path');

const componentPaths = [];

delete components.font;

Object.keys(components).forEach(key => {
  const filePath = path.join(__dirname, `../../packages/${key}/webpack.conf.js`);

  if (existsSync(filePath)) {
    componentPaths.push(`packages/${key}/webpack.conf.js`);
  }
});

const paths = componentPaths.join(',');
const cli = `node_modules/.bin/webpack build -c ${paths} -p`;

execSync(cli, {
  stdio: 'inherit'
});
