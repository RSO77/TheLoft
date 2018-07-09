var gulp = require('gulp'),
    amdOptimize = require("amd-optimize"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

var historyApiFallback = require('connect-history-api-fallback');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
    build: {
        css: 'media/css/'
    },
    src: {
        style: 'sass/app.scss'
    },
    watch: {
        style: ['sass/**/*.scss', 'sass/*.scss'],
        html: ['templates/**/*.html','app/**/*.html','app/modules/**/*.html', 'index.html'],
        js: ['app/**/*.js'],
        svg: ['svg/*.svg']
    }
};

gulp.task('sass', function () {
    gulp.src(path.src.style)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
            }}))
        .pipe(sass({includePaths: ['sass/components/variables.sass','sass/components/mixins.sass'],style: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [historyApiFallback({})]
        }
    });
    gulp.watch(path.watch.style, ['sass']);
    gulp.watch(path.watch.js).on('change', browserSync.reload);
    gulp.watch(path.watch.svg,['svgstore']).on('change', browserSync.reload);
    gulp.watch(path.watch.html).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);


gulp.task('amdBuild', function () {
    gulp.src('.//*.js', {base: './'})
        .pipe(amdOptimize("initialize", {
            baseUrl: './',
            configFile: './initialize.js',
            findNestedDependencies: true
        }))
        .pipe(concat('tmp.js'))
        .pipe(gulp.dest('build'));



});

gulp.task('scripts', ['amdBuild'], function (cb) {
    gulp.src(['vendor/require.js', 'build/tmp.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        // .pipe(gzip())
        .pipe(gulp.dest('build'))
});