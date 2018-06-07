const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const fs = require('fs-extra');

// compile component css
gulp.task('compile', () => {
  fs.emptyDirSync('./lib');
  return gulp
    .src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// copy lib files
gulp.task('lib', ['compile'], () => {
  fs.copySync('./lib', '../../lib/vant-css');
  fs.copySync('./lib', '../../es/vant-css');
});

gulp.task('build', ['lib']);
