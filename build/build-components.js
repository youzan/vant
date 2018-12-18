/**
 * Compile components
 */
const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');
const compiler = require('@vant/compiler');
const markdownVetur = require('markdown-vetur');

const esDir = path.join(__dirname, '../es');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../packages');
const veturDir = path.join(__dirname, '../vetur');
const compilerOption = {
  babel: {
    configFile: path.join(__dirname, '../babel.config.js')
  }
};

const isDir = dir => fs.lstatSync(dir).isDirectory();
const isJs = path => /\.js$/.test(path);
const isSfc = path => /\.vue$/.test(path);
const isCode = path => !/(demo|test|\.md)$/.test(path);

function compile(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);

    // remove unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    // scan dir
    if (isDir(filePath)) {
      return compile(filePath);
    }

    // compile sfc
    if (isSfc(file)) {
      const source = fs.readFileSync(filePath, 'utf-8');
      fs.removeSync(filePath);

      const jsPath = filePath.replace('.vue', '.js');
      const vuePath = filePath + '.js';
      const output = fs.existsSync(jsPath) ? vuePath : jsPath;

      return fs.outputFileSync(output, compiler(source, compilerOption).js);
    }

    // compile js
    if (isJs(file)) {
      const { code } = babel.transformFileSync(filePath, compilerOption.babel);
      fs.outputFileSync(filePath, code);
    }
  });
}

// clear dir
fs.emptyDirSync(esDir);
fs.emptyDirSync(libDir);

// compile es dir
fs.copySync(srcDir, esDir);
compile(esDir);

// compile lib dir
process.env.BABEL_MODULE = 'commonjs';
fs.copySync(srcDir, libDir);
compile(libDir);

// generate vetur tags & attributes
markdownVetur.parseAndWrite({
  path: srcDir,
  test: /zh-CN\.md/,
  tagPrefix: 'van-',
  outputDir: veturDir
});
