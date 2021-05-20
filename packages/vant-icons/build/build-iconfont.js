/**
 * build iconfont from sketch
 */
const { src, dest, series } = require('gulp');
const fs = require('fs-extra');
const glob = require('fast-glob');
const shell = require('shelljs');
const encode = require('./build-encode');
const md5File = require('md5-file');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const config = require('../src/config');
const codepoints = require('./codepoints');
const { join } = require('path');

const srcDir = join(__dirname, '../src');
const svgDir = join(__dirname, '../assets/svg');
const sketch = join(__dirname, '../assets/icons.sketch');
const template = join(__dirname, './template.tpl');
const formats = ['ttf', 'woff', 'woff2'];

// get md5 from sketch
const md5 = md5File.sync(sketch).slice(0, 6);
const fontName = `${config.name}-${md5}`;

// remove previous fonts
const prevFonts = glob.sync(formats.map((ext) => join(srcDir, '*.' + ext)));
prevFonts.forEach((font) => fs.removeSync(font));

// generate font from svg && build index.less
function font() {
  return src([`${svgDir}/*.svg`])
    .pipe(
      iconfontCss({
        fontName: config.name,
        path: template,
        targetPath: '../src/index.less',
        normalize: true,
        fixedCodepoints: codepoints,
        cssClass: fontName, // this is a trick to pass fontName to template
      })
    )
    .pipe(
      iconfont({
        fontName,
        formats,
      })
    )
    .pipe(dest(srcDir));
}

function encodeWoff2(done) {
  const cdnPath = `https://img01.yzcdn.cn/vant/${fontName}.woff2`;
  const srcFile = join(srcDir, 'index.less');
  const woff2Base64 = fs.readFileSync(`../src/${fontName}.woff2`, 'base64');
  const woff2DataUrl = `data:font/ttf;base64,${woff2Base64}`;

  fs.writeFileSync(
    join(srcDir, 'encode-woff2.less'),
    fs.readFileSync(srcFile, 'utf-8').replace(cdnPath, woff2DataUrl)
  );

  done();
}

function upload(done) {
  // generate encode.less
  encode(fontName, srcDir);

  // upload font to cdn
  formats.forEach((ext) => {
    shell.exec(`superman-cdn /vant ${join(srcDir, fontName + '.' + ext)}`);
  });

  done();
}

exports.default = series(font, encodeWoff2, upload);
