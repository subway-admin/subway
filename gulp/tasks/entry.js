/**
 * Created by Loki.Luo on 2017/3/29.
 */
var gulp = require('gulp'),
    // rjs = require('gulp-requirejs'),
    rjs = require('gulp-requirejs-optimize'),
    config = require('../config');// gulp公共配置

exports.task = function () {
    return gulp.src([config.paths.componentJs])
        .pipe(rjs({
            optimize: 'none',
        }))
        .pipe(gulp.dest(config.output+'/component'));

};