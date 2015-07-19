/**
 * Config module.
 *
 * @module CartApp.config
 */
(function () {
  'use strict';

  angular
    .module('CartApp.config', [])
    .config(AppConfig);

  /**
   * AppController
   * Application use HTML5 Mode.
   *
   * Example:
   * #### Hashbang Mode
   * http://www.example.com/#/aaa/
   * #### HTML5 Mode
   * http://www.example.com/aaa/
   *
   * @class AppConfig
   * @param {Object} $locationProvider
   * @constructor
   */
  function AppConfig($locationProvider) {
    $locationProvider.html5Mode(true);
  }

  AppConfig.$inject = ['$locationProvider'];
})();
