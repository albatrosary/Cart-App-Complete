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
    
    var someProperty={};

    var usersService = $resource('/api/users/:id', {});

    return usersService;
  }

})();


