var runSequence = require('run-sequence');
gulp.task('production', function(cb) {
    runSequence(['sprites', 'copy.html.prod', 'sass.prod', 'concat_vendor', 'concat.prod'], ['browser-sync'], cb);
});