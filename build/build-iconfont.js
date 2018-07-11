/**
 * build iconfont from sketch
 */
const fs = require('fs-extra');
const gulp = require('gulp');
const path = require('path');
const glob = require('fast-glob');
const shell = require('shelljs');
const md5File = require('md5-file');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const config = require('../packages/icon/config');
const local = require('../packages/icon/config/template-local');

const iconDir = path.join(__dirname, '../packages/icon');
const cssDir = path.join(__dirname, '../packages/vant-css/src');
const svgDir = path.join(iconDir, 'svg');
const sketch = path.join(iconDir, 'assets/icons.sketch');
const template = path.join(iconDir, 'config/template.css');

// get md5 from sketch
const md5 = md5File.sync(sketch).slice(0, 6);
const ttf = `${config.name}-${md5}.ttf`;

// extract svg from sketch
// should install sketchtool first
// install guide: https://developer.sketchapp.com/guides/sketchtool/
shell.exec(
  `/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool export slices --formats=svg --overwriting=YES --save-for-web=YES --output=${svgDir} ${sketch}`
);

// remove previous ttf
const prevTTFs = glob.sync(path.join(iconDir, '*.ttf'));
prevTTFs.forEach(ttf => fs.removeSync(ttf));

// rename svg
config.glyphs.forEach((icon, index) => {
  const src = path.join(svgDir, icon.src);
  if (fs.existsSync(src)) {
    fs.renameSync(src, path.join(svgDir, icon.css + '.svg'));
  }
});

// generate ttf from sketch && build icon.css
gulp.task('ttf', () => {
  return gulp
    .src([`${svgDir}/*.svg`])
    .pipe(
      iconfontCss({
        fontName: config.name,
        path: template,
        targetPath: '../vant-css/src/icon.css',
        normalize: true,
        firstGlyph: 0xf000,
        cssClass: ttf // this is a trick to pass ttf to template
      })
    )
    .pipe(
      iconfont({
        fontName: ttf.replace('.ttf', ''),
        formats: ['ttf']
      })
    )
    .pipe(gulp.dest(iconDir));
});

gulp.task('default', ['ttf'], () => {
  // generate icon-local.css
  fs.writeFileSync(
    path.join(cssDir, 'icon-local.css'),
    local(config.name, ttf)
  );

  // remove svg
  fs.removeSync(svgDir);

  // upload ttf to cdn
  shell.exec(`superman cdn /vant ${path.join(iconDir, ttf)}`);
});
