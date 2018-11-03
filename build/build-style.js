const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');

// compile component css
gulp.task('compile', () => {
  return gulp
    .src(['../es/**/*.css', '../lib/**/*.css'])
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest(file => file.base));
});

gulp.task('default', ['compile']);
