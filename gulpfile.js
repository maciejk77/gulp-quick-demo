var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  rename = require('gulp-rename');

  gulp.task('delete', function() {
    del(['assets/*'], function(err) {
      console.log('Files deleted');
    });
  });

  gulp.task('style', function() {
    return gulp
      .src('css/style.css')
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('assets'));
  });

  gulp.task('script', function() {
    return gulp
      .src('js/script.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('assets'));
  });

  gulp.task('default', ['delete','style','script']);

