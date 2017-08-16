const fs = require('fs-extra');
const path = require('path');
const compiler = require('vue-sfc-compiler');
const libDir = path.resolve(__dirname, '../../lib');
const srcDir = path.resolve(__dirname, '../../packages');
require('shelljs/global');

fs.emptyDirSync(libDir);
fs.copySync(srcDir, libDir);
compileVueFiles(libDir);
exec('cross-env BABEL_ENV=commonjs babel lib --out-dir lib');

function compileVueFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const absolutePath = path.resolve(dir, file);

    if (file.indexOf('vant-css') !== -1) {
      fs.removeSync(absolutePath);
    } else if (isDir(absolutePath)) {
      return compileVueFiles(absolutePath);
    } else if (/\.vue$/.test(file)) {
      const source = fs.readFileSync(absolutePath, 'utf-8');
      fs.removeSync(absolutePath);

      const outputVuePath = absolutePath + '.js';
      const outputJsPath = absolutePath.replace('.vue', '.js');
      const output = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath;
      fs.outputFileSync(output, compiler(source));
    }
  });
}

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}
