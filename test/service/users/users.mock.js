(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.users',[])
    .factory('UsersService', UsersService);

  var result = {};

  function UsersService(){
    
    var someSpy = jasmine.createSpy().and.returnValue({
      then: function(cb){
        cb(result);
        return {
          catch: function (ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    });

    return {
      some: someSpy
    };
  }
})();