let gulp = require('gulp');
let reactEasy = require('gulp-react-easy');

gulp.task('default', ['js', 'watch']);

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*', ['js']);
});

gulp.task('js', () =>
  reactEasy({ file: './src/js/app.jsx', debug: true })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'))
);
