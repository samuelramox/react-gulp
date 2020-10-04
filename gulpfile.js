const gulp = require('gulp');
const reactEasy = require('gulp-react-easy');
const browserSync = require('browser-sync').create();

gulp.task('default', ['js', 'browser-sync', 'watch']);

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('js', () =>
  reactEasy({ file: './src/js/app.jsx', debug: true })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
);
