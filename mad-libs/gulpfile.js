var gulp =        require('gulp'),
    browserSync = require('browser-sync').create(),
    jshint =      require('gulp-jshint'),
    reload =      browserSync.reload;

gulp.task('lint', function(){
  gulp.src(['./*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sync', function() {
  browserSync.init({
    notify: false,
    server: {
        baseDir: "./app"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch([
    'app/**'
  ]).on('change', reload);
});

// Default Task
gulp.task('default', ['sync', 'lint', 'watch']);
