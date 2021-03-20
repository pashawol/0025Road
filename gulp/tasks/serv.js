const { reload } = require("browser-sync");

module.exports = function (){

  $.gulp.task('serv', function() {
    $.browserSync.init({
        server: {
            baseDir: './' + $.public
      },
      // notify: false,
      online: true,
		// online: false, // Work offline without internet connection
		tunnel: 'reload',   // Demonstration page: http://projectname.localtunnel.me
    });

});

}
