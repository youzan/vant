const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');

// compile component css
gulp.task('compile', () => (
  gulp
    .src(['../es/**/*.less', '../lib/**/*.less'])
    .pipe(less({
      paths: [path.resolve(__dirname, 'node_modules')]
    }))
    .pipe(postcss())
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')))
));

// icon.less should be replaced by compiled file
gulp.task('default', ['compile'], () => (
  glob([
    '../es/icon/*.css',
    '../lib/icon/*.css'
  ]).then(files => {
    files.forEach(file => {
      file = path.join(__dirname, file);
      fs.copyFileSync(file, file.replace('.css', '.less'));
    });
  })
));
