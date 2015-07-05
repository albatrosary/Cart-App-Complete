(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.books',[])
    .factory('BooksService', BooksService);

  function BooksService(){
    
    return {
      get: getSpy,
      query: querySpy
    };
  }
  
  var result = {};

  var getSpy = jasmine.createSpy().and.returnValue({
    $promise: {
      then: function(cb){
        cb(result);
        return {
          catch: function (ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    }
  });
  
  var querySpy = jasmine.createSpy().and.returnValue({
    $promise: {
      then: function(cb){
        cb(result);
        return {
          catch: function (ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    }
  });

})();