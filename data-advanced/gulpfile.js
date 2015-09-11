var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var run = require('gulp-run');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
});

/*gulp.task('start2', function(){
	run('node server.js').exec();
});*/

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});


gulp.task('default',['browserify', 'copy', 'start']);
