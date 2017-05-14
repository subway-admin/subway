/**
 * Created by 11561 on 2017/5/13.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),

    config = require('../config');// gulpπ´π≤≈‰÷√

exports.task = function () {
    return gulp.src([config.paths.js,'!'+config.paths.docJs])
        //.pipe(sourcemaps.init({loadMaps: true}))
        //.pipe(concat("main.js"))
        .pipe(gulp.dest(config.output))
        //.pipe(uglify({mangle : true}))
        //.pipe(rename({suffix:'.min'}))
        //.pipe(sourcemaps.write('./'))
        //.pipe(gulp.dest(config.output+'/main'))
};