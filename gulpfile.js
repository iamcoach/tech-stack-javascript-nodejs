var gulp = require('gulp');
var clean = require('gulp-clean');
var exec = require('child_process').exec;
var to5 = require('gulp-6to5');
var sys = require('sys');


gulp.task('clean-dist', function() {
  return gulp.src('dist', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('clean-tmp', function() {
  return gulp.src('tmp', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('generate-tmp', ['clean-tmp'], function() {
  return gulp.src('src/**/*.js')
    .pipe(to5())
    .pipe(gulp.dest('tmp'));
});

gulp.task('default', ['generate-tmp'], function() {
  exec('node tmp/main/app.js', function(error, stdout, stderr) {
    sys.puts(stdout);
  });
});
