var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-dist', function() {
  return gulp.src('dist', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('clean-tmp', function() {
  return gulp.src('tmp', { read: false })
    .pipe(clean({ force: true }));
});
