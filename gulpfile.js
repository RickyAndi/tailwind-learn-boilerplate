const gulp = require('gulp');
const gulpCopy = require('gulp-copy');

gulp.task('copy-vue', function () {
    return gulp
        .src('./node_modules/vue/dist/vue.js')
        .pipe(gulp.dest('./public/js'));
});