var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var csso = require('gulp-csso');

gulp.task('style', function () {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    //   .pipe(csso())
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('src/assets/scss/**/*.scss', ['style']);
});
