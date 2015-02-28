var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require('gulp-babel');

gulp.task('clean-dist', function() {
  return gulp.src('dist', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('generate-dist', ['clean-dist'], function() {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

