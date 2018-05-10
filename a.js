const glob = require('glob');
const fs = require('fs-extra');

glob('packages/**/__snapshots__', [], (er, files) => {
  files.forEach(file => fs.remove(file));
});
