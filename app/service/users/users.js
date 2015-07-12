/**
 * Users Service module.
 *
 * @module CartApp.service.users
 */
(function () {
  'use strict';
  
  angular
    .module('CartApp.service.users',[
      'ngResource'
    ])
    .factory('UsersService', UsersService);

  UsersService.$inject = ['$resource'];

  /**
   * 
   * @class UsersService
   * @constructor
   */
  function UsersService($resource){
    return $resource('/api/users/:id', {});
  }
})();


