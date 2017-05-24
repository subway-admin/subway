/**
 * Created by Loki.Luo on 2017/3/2.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sync = require('browser-sync');
    config = require('../config');

exports.task = function () {
    sync({
        server: {
            baseDir: "./"
        },
        ui:{
            port:3003
        },
        open: false,
        port:8083
    });
    gulp.watch(['app/**/*.scss','app/**/*.html','app/**/*.js'],['default',sync.reload])
};
