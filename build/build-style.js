const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');

// compile component css
gulp.task('compile', () => {
  return gulp
    .src(['../es/**/*.less', '../lib/**/*.less'])
    .pipe(less())
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')));
});

gulp.task('default', ['compile']);
