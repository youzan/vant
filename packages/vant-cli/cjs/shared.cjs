const { join, dirname } = require('path');
const { existsSync } = require('fs');

function findRootDir(dir) {
  if (existsSync(join(dir, 'vant.config.mjs'))) {
    return dir;
  }

  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}

const CWD = process.cwd();
const ROOT = findRootDir(CWD);

module.exports = {
  CWD,
  ROOT,
};
