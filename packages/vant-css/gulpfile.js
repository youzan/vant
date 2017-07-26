var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['compile']);
