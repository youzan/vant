var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var postcssPlugin = require('../../build/utils/postcss_pipe')();

gulp.task('compile', function() {
  return gulp.src('./src/*.css')
    .pipe(postcss(postcssPlugin))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['compile']);
