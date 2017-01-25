'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./static/scss/*.scss', ['sass']);
});
