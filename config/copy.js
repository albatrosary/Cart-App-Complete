(function(){
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= paths.app %>',
        dest: '<%= paths.dist %>',
        src: [
          '*.{ico,png,txt}',
          'images/{,*/}*.webp',
          'components/{,*/}*.html',
          'directives/{,*/}*.html',
          '{,*/}*.html',
          'styles/fonts/{,*/}*.*'
        ]
      }, {
        expand: true,
        dot: true,
        cwd: '.',
        src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
        dest: '<%= paths.dist %>'
      }]
    }
  };
})();
