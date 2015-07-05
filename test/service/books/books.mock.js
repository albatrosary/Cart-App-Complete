(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.books',[])
    .factory('BooksService', BooksService);

  var result = {};

  function BooksService(){
    
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

    return {
      get: getSpy,
      query: querySpy
    };
  }
})();