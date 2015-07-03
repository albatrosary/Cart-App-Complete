/**
 * This module is Config module.
 * @module CartApp.config
 */
(function () {
  'use strict';

  angular
    .module('CartApp.config', [])
    .config(AppConfig);

  function AppConfig($locationProvider){
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(true);
  }

  AppConfig.$inject = ['$locationProvider'];
})();