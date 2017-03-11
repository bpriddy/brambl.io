var gulp = require('gulp');
var gls  = require('gulp-live-server');
var server;
var plumber = require('gulp-plumber');

var rollup = require('rollup');
var pug = require('rollup-plugin-pug');
var resolve = require('rollup-plugin-node-resolve');
var uglify = require('rollup-plugin-uglify');
// var minify = require('rollup-plugin-minify');
var minify = require('gulp-babel-minify');
var babel = require('rollup-plugin-babel');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

var fs = require("fs");


gulp.task('vendor', function() {
	return rollup.rollup({
			entry: "./src/vendor.js",
			plugins: [
				resolve({
					module: true,
					jsnext: true,
					main: true,
					browser: true
				}),
				babel({
					exclude: 'node_modules/**',
			    }),
				// uglify(),
				minify({iife: './build/vendor.min.js'})
			],
		})
		.then(function (bundle) {
			bundle.write({
				format: "iife",
				moduleName: "vendor",
				dest: "./build/vendor.js",
				// sourceMap: true
			});
			if(server) server.notify();
		})

});

gulp.task("js", function() {
	return rollup.rollup({
			entry: "./src/main.js",
			plugins: [
				pug(),
				resolve({
					module: true,
					jsnext: true,
					main: true,
					browser: true
				}),
				babel({
					exclude: 'node_modules/**',
			    }),
				minify({iife: './build/index.min.js'})
			],
		})
		.then(function (bundle) {
			bundle.write({
				format: "iife",
				moduleName: "main",
				dest: "./build/index.js",
				sourceMap: true
			});
			if(server) server.notify();
		})
});

gulp.task("sass", function() {
	var stream = gulp.src('./src/sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass({outputStyle:'compressed'})
			.on('error', function(err){
				console.log("Error in Sass");
				console.log(err);
				this.emit("end");
			})
		)
		.pipe(concat("style.min.css"))
		.pipe(gulp.dest('./build/'));

	if(server) stream.pipe(server.notify())
    return stream
});


gulp.task("copy", function() {
	return gulp.src(['./src/assets/**/*.*'])
		.pipe(gulp.dest('./build/assets/'));
});


gulp.task('server', function() {
    server = gls.new(['--harmony', './server/app.js']);
    return server.start();
});

gulp.task('restartserver', function() {
    console.log('restart server');
    server.start.bind(server)();
    return true;
});

gulp.task('dowatch', function() {
	gulp.watch(['./src/main.js','./src/js/**/*.js','./src/pug/**/*.pug'], ["js"]);
	gulp.watch(['./server/**/*.*'], ["restartserver"]);
	gulp.watch('./src/sass/**/*.sass', ["sass"]);
	gulp.watch('./src/assets/images/*.*', ["copy"]);
});

gulp.task('default', ["vendor", "js", "sass", "copy", "dowatch", "server"]);


