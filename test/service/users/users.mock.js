(function() {
  'use strict';

  angular
    .module('CartApp.mock.service.users', [])
    .factory('UsersService', UsersService);

  function UsersService() {
    return {
      query: querySpy
    };
  }

  var result = {};

  var querySpy = jasmine.createSpy().and.returnValue({
    $promise: {
      then: function(cb) {
        cb(result);
        return {
          catch: function(ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    }
  });

})();
