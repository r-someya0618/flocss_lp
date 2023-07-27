const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulkSass = require('gulp-sass-glob-use-forward');

gulp.task('sass', function (done) {
  gulp
    .src(['./asset/scss/**/*.scss', './asset/scss/**/_*.scss'])
    .pipe(bulkSass())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./asset/css'));
  done();
});

gulp.task('watch', function () {
  gulp.watch(
    ['./asset/scss/**/*.scss', './asset/scss/**/_*.scss'],
    gulp.task('sass')
  );
});
