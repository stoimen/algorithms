'use strict';
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  return gulp.src('src/js/**/*.test.js')
    .pipe(jasmine());
});