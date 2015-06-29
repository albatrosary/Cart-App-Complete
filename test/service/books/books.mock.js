(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.books',[])
    .factory('BooksService', BooksService);

  var result = {};

  function BooksService(){
    
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