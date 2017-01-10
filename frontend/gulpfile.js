var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var path = require('path');

gulp.task('css', function () {
    return gulp.src(['./css/custom-bootstrap/custom-bootstrap.less', 'vendor/components-font-awesome/less/font-awesome.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(cssmin())
        .pipe(concat('main.min.css'))
        .pipe(size())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src(['vendor/jquery/dist/jquery.js', 'vendor/bootstrap/dist/js/bootstrap.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(size())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('fonts', function () {
    return gulp.src('vendor/components-font-awesome/fonts/**.*')
        .pipe(size())
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('build-html', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src(
        [
            './twig/dashboard.twig',
            './twig/articles.twig'
        ]
    )
        .pipe(twig())
        .pipe(gulp.dest('./html/'));
});
