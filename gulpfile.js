var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('babelify');
//var Server = require('karma').Server;
 
//build for production (minify, etc.)
gulp.task('scripts', function() {
    return browserify('./src/scripts/index.js')
		.transform("babelify", {presets:["es2015"], extensions:[".js"]})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dist/'));
});

//TODO Rename all .html and change extension to .php
gulp.task('html', function() {
    gulp.src(['./src/*.php'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('svg', function() {
    gulp.src(['./src/svg/*'])
        .pipe(gulp.dest('dist/svg'));
});

gulp.task('images', function() {
    gulp.src(['./src/res/*'])
        .pipe(gulp.dest('dist/res'));
});

gulp.task('fonts', function() {
    gulp.src(['./src/fonts/*'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('styles', function() {
    gulp.src('./src/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['styles', 'scripts', 'html', 'svg', 'fonts', 'images'], function() {
    // watch for JS changes
    gulp.watch('./src/scripts/*.js', function() {
    gulp.run('scripts');
    });

    // watch for CSS changes
    gulp.watch('./src/styles/*.scss', function() {
    gulp.run('styles');
    });

    gulp.watch('./src/*.html', function() {
        gulp.run('html');
    });
});

/*
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
*/
