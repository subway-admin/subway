/**
 * Created by Loki.Luo on 2017/3/29.
 */
var gulp = require('gulp'),
    // rjs = require('gulp-requirejs'),
    rjs = require('gulp-requirejs-optimize'),
    config = require('../config');// gulp公共配置

exports.task = function () {
    return gulp.src([config.root+'/require.config.js'])
        .pipe(rjs({
            baseUrl: config.root+'/resource/lib',
            paths: {
                common: '../common-script',
                templates:'../../templates',
                data:'../../data',
                component:'../../component'
            },
            mainConfigFile: config.root+'/require.config.js',
            optimize: 'none',
            //

            include: [
                'domReady',
                'doT.min',
                'json',
                // 'test',

                'common/baseClass',
                'common/scrollTo',
                'common/anchor',
                'common/load'
                // 'common/test2',

            ]

        }))
        .pipe(gulp.dest(config.output));

};