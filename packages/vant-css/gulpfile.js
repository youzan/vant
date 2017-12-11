const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const fs = require('fs-extra');
const config = require('./scripts/icon-config');
const path = require('path');
const shelljs = require('shelljs');
const md5File = require('md5-file');
const glob = require('glob');
const iconLocalTemplate = require('./scripts/icon-local-template');
const resolve = relativePath => path.resolve(__dirname, relativePath);

// compile component css
gulp.task('compile', () => {
  return gulp
    .src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// copy lib files
gulp.task('lib', ['compile'], () => {
  const ttf = glob.sync(resolve('./src/*.ttf'));
  ttf.forEach(ttf => fs.copy(ttf, './lib/' + path.parse(ttf).base));
  fs.copy('./lib', '../../lib/vant-css');
});

// extract svg from sketch
function extractSvg() {
  shelljs.exec('./scripts/extract-icons.sh');
  fs.mkdirsSync(path.join(__dirname, './icons'));
  config.glyphs.forEach(icon => {
    const src = path.join(__dirname, './icons/', icon.src);
    if (fs.existsSync(src)) {
      fs.renameSync(src, path.join(__dirname, './icons', icon.css + '.svg'));
    }
  });
}

// get icon unicode
function getCodePoints() {
  const codePoints = {};
  config.glyphs.forEach((icon, index) => {
    const svgPath = path.join(__dirname, './icons/', icon.css + '.svg');
    if (fs.existsSync(svgPath)) {
      codePoints[icon.css] = 0xf000 + index;
    }
  });
}

// generate ttf from sketch && build icon.css
gulp.task('icon-font-ttf', () => {
  extractSvg();
  return gulp
    .src(['icons/*.svg'])
    .pipe(
      iconfontCss({
        fontName: config.name,
        path: 'scripts/icon-template.css',
        targetPath: './icon.css',
        normalize: true,
        firstGlyph: 0xf000,
        fixedCodepoints: getCodePoints()
      })
    )
    .pipe(
      iconfont({
        fontName: config.name,
        formats: ['ttf']
      })
    )
    .on('glyphs', (glyphs, options) => {})
    .pipe(gulp.dest('icons'));
});

gulp.task('icon-font', ['icon-font-ttf'], () => {
  // remove previous ttf
  const prevTTFs = glob.sync(resolve('./src/*.ttf'));
  prevTTFs.forEach(ttf => fs.removeSync(ttf));

  // generate ttf hash
  const fontPath = resolve('./icons/vant-icon.ttf');
  const hash = md5File.sync(fontPath).slice(0, 6);
  fs.renameSync(fontPath, resolve(`./src/vant-icon-${hash}.ttf`));

  // copy icon.css to src
  let source = fs.readFileSync(resolve('./icons/icon.css'), 'utf-8');
  source = source.replace('vant-icon.ttf', `vant-icon-${hash}.ttf`);
  fs.writeFileSync(resolve('./src/icon.css'), source);

  // generate icon-local.css
  const localIconSource = iconLocalTemplate(config.name, hash);
  fs.writeFileSync(resolve('./src/icon-local.css'), localIconSource);

  // upload ttf to cdn
  shelljs.exec(`superman cdn /zanui/icon ./src/vant-icon-${hash}.ttf`);
});

gulp.task('build', ['lib']);
