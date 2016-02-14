var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify');

  gulp.task('style', function() {
    return gulp
      .src('css/style.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('assets'));
  });

  gulp.task('script', function() {
    return gulp
      .src('js/script.js')
      .pipe(uglify())
      .pipe(gulp.dest('assets'));
  });

  gulp.task('default', ['style','script']);