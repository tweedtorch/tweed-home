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

const reload = browserSync.reload;

gulp.task('compass', () => {
  return gulp.src('src/styles/*.scss')
    .pipe(compass({
      config_file: './src/config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(gulp.dest('.tmp/styles'))
});

gulp.task('build', ['compass']);
