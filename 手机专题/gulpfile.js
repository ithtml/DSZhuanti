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

// 静态服务器 + 监听 less/html 文件
gulp.task('serve', ['less'], function() {

    browserSync.init({
        // server: "./app"
        server: folders.dir
    });

    // gulp.watch("app/less/*.less", ['less']);
    // gulp.watch("app/*.html").on('change', reload);
    gulp.watch(folders.dir + "/less/*.less", ['less']);
    gulp.watch(folders.dir + "/*.html").on('change', reload);
});

// less编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src(folders.dir + "/less/*.less")
        .pipe(px2rem())
        .pipe(less())
        .pipe(gulp.dest(folders.dir + "/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);