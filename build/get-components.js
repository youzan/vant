const fs = require('fs');
const path = require('path');

const EXCLUDES = ['index.ts', 'index.less', 'style', 'mixins', 'utils', '.DS_Store'];

module.exports = function() {
  const src = path.resolve(__dirname, '../src');
  const dirs = fs.readdirSync(src);
  return dirs.filter(dir => !EXCLUDES.includes(dir));
};
