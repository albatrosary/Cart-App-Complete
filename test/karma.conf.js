// Karma configuration
// Generated on Mon Apr 20 2015 20:03:02 GMT+0900 (JST)
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha','chai','sinon'],
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-new-router/dist/router.es5.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      // injector:js
      'app/components/about/about.js',
      'app/components/carts/carts.js',
      'app/components/contact/contact.js',
      'app/components/history/history.js',
      'app/components/home/home.js',
      'app/components/item/item.js',
      'app/components/items/items.js',
      'app/components/user/user.js',
      'app/directives/message/message.js',
      'app/scripts/config.js',
      'app/scripts/value.js',
      'app/service/books/books.js',
      'app/service/carts/carts.js',
      'app/service/gruntfiles/gruntfiles.js',
      'app/service/purchase/purchase.js',
      'app/service/users/users.js',
      'test/components/about/about.spec.js',
      'test/components/carts/carts.spec.js',
      'test/components/contact/contact.spec.js',
      'test/components/history/history.spec.js',
      'test/components/home/home.spec.js',
      'test/components/item/item.spec.js',
      'test/components/items/items.spec.js',
      'test/components/user/user.spec.js',
      'test/directives/message/message.spec.js',
      'test/main.spec.js',
      'test/service/books/books.mock.js',
      'test/service/books/books.spec.js',
      'test/service/carts/carts.mock.js',
      'test/service/carts/carts.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      'test/service/purchase/purchase.mock.js',
      'test/service/purchase/purchase.spec.js',
      'test/service/users/users.mock.js',
      'test/service/users/users.spec.js',
      // endinjector
      'app/scripts/main.js',
      'test/main.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'report',
      subdir: 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
