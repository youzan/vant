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

gulp.task('default', ['compile']);
