var gulp = require('gulp'),
	connect = require('gulp-connect'),
	libs = require('./libraries.json');

gulp.task('refresh', function() {
	gulp.src('src/**')
		.pipe(connect.reload());
});

gulp.task('serve', function() {
	connect.server({
		root: "src/",
		fallback: "src/index.html",
		livereload: true,
		port: 4242
	});
	gulp.watch('src/**', ['refresh']);
});

gulp.task('default', ['serve']);

gulp.task('libs', function () {
	gulp.src(libs.map(function (lib) { return 'node_modules/' + lib; }))
		.pipe(gulp.dest('src/libs'));
});