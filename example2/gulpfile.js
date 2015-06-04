var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    runSequence = require('run-sequence');

gulp.task('webserver', function() {
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
