(function() {

    'use strict';

    // Gulp dependencies
    var gulp      = require('gulp'),
        jscs      = require('gulp-jscs'),
        jshint    = require('gulp-jshint'),
        ngconfig  = require('gulp-ng-config'),
        less      = require('gulp-less'),
        rename    = require('gulp-rename'),
        minifyCSS = require('gulp-minify-css');

    // LESS
    // ------------------------------------------------------------------------------------------------------

    gulp.task('less_main', function () {
        return gulp
            .src('assets/less/main.less')
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('assets/css'));
    });

    gulp.task('less_main_css', function () {
        return gulp
            .src('assets/less/main.less')
            .pipe(less())
            .pipe(gulp.dest('assets/css'));
    });

    gulp.task('less_modules', function () {
        return gulp
            .src('assets/less/modules/**/*.less')
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('assets/css/modules'));
    });

    // Javascript
    // ------------------------------------------------------------------------------------------------------

    gulp.task('lint', function () {
        return gulp
            .src(['app/**/*.js', '!app/config.js'])
            .pipe(jscs())
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    gulp.task('config', function () {
        return gulp
            .src('app/config.json')
            .pipe(ngconfig('MoovIm.Config'))
            .pipe(gulp.dest('app'));
    });

    gulp.task('config_prod', function () {
        return gulp
            .src('app/config.json')
            .pipe(ngconfig('MoovIm.Config', {
                'config': {
                    'project': {
                        'env': 'prod',
                        'url': 'http://crm-business.appturbo.net/'
                    },
                    'oauth': {
                        'client_id': '233892754495-lf20vqcl5fnlksp993gok44mqgnbg3e6.apps.googleusercontent.com',
                        'redirect_uri': 'http://crm-business.appturbo.net/'
                    },
                    'api': {
                        'endpoint': 'http://api.crm-business.dev.appturbo.net/app_dev.php/'
                    }
                }
            }))
            .pipe(gulp.dest('app'));
    });

    // Maintenance OFF
    gulp.task('up', function () {
        return gulp
            .src('app/config.json')
            .pipe(ngconfig('MoovIm.Config', {
                'config': {
                    'project': {
                        'maintenance': false
                    }
                }
            }))
            .pipe(gulp.dest('app'));
    });

    // Maintenance ON
    gulp.task('down', function () {
        return gulp
            .src('app/config.json')
            .pipe(ngconfig('MoovIm.Config', {
                'config': {
                    'project': {
                        'maintenance': true
                    }
                }
            }))
            .pipe(gulp.dest('app'));
    });

    // Production
    gulp.task('prod', [
        'config_prod'
    ]);

    // Watching files
    gulp.task('watch', function () {

        // gulp.watch(['app/**/*.js', '!app/config.js'], ['lint']);

    });

    // Default tasks (called when running `gulp` from cli)
    gulp.task('default', [
        'watch',
        'less_main',
        'less_main_css',
        'less_modules',
        'config'
    ]);

}());
