/**
 * Created by Loki.Luo on 2017/3/1.
 */

'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    fs = require('fs'),
    runSequence = require('gulp-run-sequence');

// 任务入口
gulp.task('default', ['clean'], function () {
    var log = gutil.colors.red('start');
    gutil.log(gutil.colors.bgBlack(log));
    runSequence(['clean','cssmin']);
});

// 从gulp目录读取任务
fs.readdirSync('./gulp/tasks')
    .filter(function (filename) {
        return filename.match(/\.js$/i);
    })
    .map(function (filename) {
        return {
            name: filename.substr(0, filename.length - 3),
            contents: require('./gulp/tasks/' + filename)
        };
    })
    .forEach(function (file) {
        gulp.task(file.name, file.contents.dependencies, file.contents.task);
    });