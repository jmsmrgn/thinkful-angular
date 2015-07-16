var gulp =        require('gulp'),
    browserSync = require('browser-sync').create(),
    jshint =      require('gulp-jshint'),
    reload =      browserSync.reload;

gulp.task('lint', function(){
  gulp.src(['./app/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
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
gulp.task('default', ['sync', 'watch']);
