var gulp = require('gulp'),
    less = require('gulp-less'),
    px2rem = require('gulp-px2rem-plugin'),
    mist = require('minimist');

var folder = {
  string: 'dir',
  // default: { env: process.env.NODE_ENV || 'production' }
};

var folders = mist(process.argv.slice(2), folder);

// gulp.task('default'[])

gulp.task('less2css', function () {
  var less_stream = gulp.src(folders.dir + '/css.less')
    .pipe(px2rem())
    .pipe(less())
    .pipe(gulp.dest(folders.dir));
  return less_stream;
});

gulp.task('px2rem',function(){
  gulp.src(folders.dir + '/css.css')
  .pipe(px2rem())

});