var gulp        = require('gulp');
var mist        = require('minimist');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var px2rem      = require('gulp-px2rem-plugin');
var reload      = browserSync.reload;

// 设置命令行变量参数 
var folder = {
  string: 'dir',
  // default: { env: process.env.NODE_ENV || 'production' }
};
var folders = mist(process.argv.slice(2), folder);




 gulp.task('less', function(){
     return gulp.src(folders.dir + "/css.less")
        .pipe(less())
        .pipe(px2rem())
        .pipe(gulp.dest(folders.dir))
        .pipe(reload({stream: true}));
 });

// 静态服务器 + 监听 less/html 文件
gulp.task('serve', ['less'], function() {

    browserSync.init({
        // server: "./app"
        server: {
            baseDir: "./",
            directory: true
        },
        browser: "chrome"
    });

    gulp.watch(folders.dir + "/*.less", ['less']);
    gulp.watch(folders.dir + "/*.html").on('change', reload);
});

 gulp.task('default', ['serve']);