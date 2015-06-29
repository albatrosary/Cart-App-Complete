(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.aaaaa',[])
    .factory('AaaaaService', AaaaaService);

  var result = {};

  function AaaaaService(){
    
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