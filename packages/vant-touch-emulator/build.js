const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'src', 'index.js');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}
fs.copyFileSync(srcFile, path.join(distDir, 'index.js'));
fs.copyFileSync(srcFile, path.join(distDir, 'index.mjs'));
