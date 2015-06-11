var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    webserver = require('gulp-webserver'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence');

gulp.task('webserver', ['less', 'watch'], function() {
    gulp.src('./app')
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: false
            },
            open: true,
            fallback: './app/index.html'
        }));
});


gulp.task('less', function () {
  return gulp.src('./app/elements/simon.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/elements'));
});


gulp.task('watch', function() {
    gulp.watch('app/**/*.less', ['less']);
});
