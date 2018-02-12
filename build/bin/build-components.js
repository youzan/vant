/**
 * 编译 components 到 lib 目录
 */
const fs = require('fs-extra');
const path = require('path');
const compiler = require('vue-sfc-compiler');
const libDir = path.resolve(__dirname, '../../lib');
const srcDir = path.resolve(__dirname, '../../packages');
const babel = require('babel-core');
const compilerOption = {
  babel: {
    extends: path.resolve(__dirname, '../../.babelrc')
  }
};

process.env.BABEL_ENV = 'commonjs';

// clear lib
fs.emptyDirSync(libDir);

// copy packages
fs.copySync(srcDir, libDir);

// 编译所有 .vue 文件到 .js
compile(libDir);

function compile(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const absolutePath = path.resolve(dir, file);

    // 移除 vant-css
    if (file.indexOf('vant-css') !== -1) {
      fs.removeSync(absolutePath);
      // 遍历文件夹
    } else if (isDir(absolutePath)) {
      return compile(absolutePath);
      // 编译 .vue 文件
    } else if (/\.vue$/.test(file)) {
      const source = fs.readFileSync(absolutePath, 'utf-8');
      fs.removeSync(absolutePath);

      const outputVuePath = absolutePath + '.js';
      const outputJsPath = absolutePath.replace('.vue', '.js');
      const output = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath;

      fs.outputFileSync(output, compiler(source, compilerOption).js);
    } else if (/\.js$/.test(file)) {
      babel.transformFile(
        absolutePath,
        compilerOption.babel,
        (err, { code }) => {
          fs.outputFileSync(absolutePath, code);
        }
      );
    }
  });
}

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}
