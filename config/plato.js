(function(){
  'use strict';

  module.exports = {
    options: {
      jshint: '<%= jshintrc.app %>',
      complexity: {
        logicalor: true,
        switchcase: true,
        forin: true,
        trycatch: true
      }
    },
    app:{
      files: {
        'report/plato/application': ['app/**/*.js']
      }
    },
    test:{
      files: {
        'report/plato/unit_test': ['test/**/*.js']
      }
    }
  };
})();
