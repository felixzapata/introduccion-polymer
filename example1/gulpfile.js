var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    runSequence = require('run-sequence');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: false
            },
            open: true,
            fallback: './index.html'
        }));
});
