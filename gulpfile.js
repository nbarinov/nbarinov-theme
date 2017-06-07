var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyjs = require('gulp-uglifyjs'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var paths = {
  html: ['source/*.html'],
  css: ['source/css/**/*.scss'],
  js: ['source/js/*.js'],
  clean: ''
}

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './dist/'
    },
    port: 8080,
    open: true
  });
});

gulp.task('html', function() {
  gulp.src(paths.html)
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}));
});

gulp.task('css', function() {
  return gulp.src('source/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify('CSS saved'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src('source/js/*.js')
    .pipe(uglifyjs())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(notify('JS saved'))
    .pipe(reload({stream: true}));
});

gulp.task('clean', function(cb) {
  rimraf(paths.clean, cb)
});

gulp.task('watcher', function() {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['scripts']);
});

gulp.task('default', ['watcher', 'browserSync']);
