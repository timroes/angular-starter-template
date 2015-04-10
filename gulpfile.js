var gulp = require('gulp'),
	connect = require('gulp-connect');

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