(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.carts',[])
    .factory('CartsService', CartsService);

  var result = {};

  function CartsService(){
    
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