// var gulp = require('gulp'),
//     uglify = require('gulp-uglify'),
//     concat = require('gulp-concat'),
//     compass = require('gulp-compass'),
//     minifyCSS = require('gulp-minify-css'),
//     rev = require('gulp-rev'),

import gulp from 'gulp';
import compass from 'gulp-compass'
import browserSync from 'browser-sync';
import del from 'del';
import hologram from 'gulp-hologram';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';

const reload = browserSync.reload;

gulp.task('compass', () => {
  return gulp.src('src/style/**/*.scss')
    .pipe(compass({
      // config_file: './src/style/config.rb',
      css: 'src/style/stylesheets',
      sass: 'src/style/sass',
      images: 'src/style/images'
    }))
    .pipe(gulp.dest('.tmp/style'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')
    // .pipe($.plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/js'))
    .pipe(reload({stream: true}));
});

gulp.task('hologram', () => {
  return gulp.src('styleguide/hologram_config.yml')
    .pipe(hologram());
});

gulp.task('html', ['compass', 'scripts'], () => {
  return gulp.src('src/*.html')
    // .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    // .pipe($.if('*.js', $.uglify()))
    // .pipe($.if('*.css', $.cssnano()))
    // .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('build', ['html']);

gulp.task('default', ['build']);