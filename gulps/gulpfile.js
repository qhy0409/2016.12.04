/**
 * Created by lenovo on 2017/3/12.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
gulp.task('test', function () {
    console.log('haha');
});
gulp.task('test2', function () {
    console.log('hehe');
});
gulp.task('default', ['test', 'test2']);
//找到index.html文件  通过管道 复制到dest文件夹里
gulp.task('task1', function () {
    gulp.src('index.html').pipe(gulp.dest('dest')).pipe(connect.reload());
});
//检测html文件是否改变
gulp.task('watch-html', function () {
    gulp.watch('index.html', ['task1']);
    gulp.watch('src/sass/*.scss',['sass']);
});
gulp.task('copy-img', function () {
    //gulp.src('src/images/*.jpg').pipe(gulp.dest('dest/imgs'));
    gulp.src('src/**/*.jpg').pipe(gulp.dest('dest/img'));

});

gulp.task('sass', function () {
    gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('dest/css')).pipe(connect.reload());
});
gulp.task('servers', function () {
    connect.server({
        root: 'dest',
        livereload: true
    })
})
gulp.task('a', ['servers', 'sass','watch-html']);
