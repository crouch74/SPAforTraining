var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var ngHtml2Js = require("gulp-ng-html2js");
var server = require('gulp-server-livereload');

var paths = {

    libs: [
        './node_modules/angular/angular.js',
        './node_modules/@uirouter/angularjs/release/angular-ui-router.js'
    ],
    app: [
        './src/app/**/*.module.js',
        './src/app/**/*.js',
        './src/app/app.js'
    ],
    templates: './src/app/**/*.template.html',
    index: './src/index.html',
    bin: '.bin/'
};


gulp
    .task('clean', function (cb) {
        rimraf(paths.bin, cb);
    });

gulp
    .task('copy:app', function () {
        gulp
            .src(paths.app)
            .pipe(concat('bundle.js'))
            // .pipe(uglify())
            .pipe(gulp.dest(paths.bin));
    });

gulp
    .task('copy:libs', function () {
        gulp
            .src(paths.libs)
            .pipe(concat('libs.js'))
            // .pipe(uglify())
            .pipe(gulp.dest(paths.bin));
    });

gulp
    .task('copy:templates', function () {
        gulp
            .src(paths.templates)
            .pipe(ngHtml2Js({
                moduleName: "app",
                prefix: "./app/",
                declareModule: false
            }))
            .pipe(concat("templates.js"))
            .pipe(gulp.dest(paths.bin));
    });

gulp
    .task('copy:index', function () {
        gulp
            .src(paths.index)
            .pipe(gulp.dest(paths.bin));
    });


gulp
    .task('copy', ['copy:app', 'copy:libs', 'copy:index', 'copy:templates']);

gulp
    .task('serve', function () {
        gulp
            .src(paths.bin)
            .pipe(server({
                livereload: true,
                open: true
            }));

        gulp
            .watch(paths.app, ['copy:app']);
        gulp
            .watch(paths.templates, ['copy:templates']);
        gulp
            .watch(paths.index, ['copy:index']);
    });

gulp
    .task('build', ['clean', 'copy']);

gulp
    .task('default', ['build', 'serve']);