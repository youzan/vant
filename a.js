const glob = require('glob');
const fs = require('fs');

const legacy = glob.sync('src/**/demo.legacy.js');

legacy.forEach((item) => {
  fs.renameSync(item, item.replace('demo.legacy.js', 'demo.spec.js'));
});
