module.exports = function(gulp, plugins) {
  return function () {
    return plugins.browserify({
      entries: './build/formio.wizard.js',
      debug: false
    })
      .bundle()
      .pipe(plugins.source('formio.wizard.js'))
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.rename('formio.wizard.min.js'))
      // DMS - In order to do a better debug, temporarily comment or remove the following line:
      //.pipe(plugins.streamify(plugins.uglify()))
      .pipe(gulp.dest('dist/'));
  };
};
