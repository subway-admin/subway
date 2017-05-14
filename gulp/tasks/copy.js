/**
 * Created by Loki.Luo on 2017/3/8.
 */
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    config = require('../config');// gulp公共配置

exports.task = function () {
    return gulp.src([config.paths.img,config.paths.font,config.paths.lib,config.paths.libjs,config.paths.data])
        .pipe(gulp.dest(config.output))
};