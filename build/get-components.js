const fs = require('fs');
const path = require('path');

module.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  const excludes = ['index.js', 'style', 'mixins', 'utils', '.DS_Store'];
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
};
