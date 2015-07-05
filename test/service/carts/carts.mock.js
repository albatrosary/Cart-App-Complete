(function(){
  'use strict';

  angular
    .module('CartApp.mock.service.carts',[])
    .factory('CartsService', CartsService);

  function CartsService(){
    
    return {
      get: getSpy,
      add: addSpy,
      remove: removeSpy,
      clear: clearSpy
    };
  }

  var result = [];

  var getSpy = jasmine.createSpy().and.returnValue(
    function(cb){
      return result;
  });

  var addSpy = jasmine.createSpy().and.returnValue({
    then: function(cb){
      cb(result);
      return {
        catch: function (ccb) {
          ccb();
        }
      };
    }
  });

  var removeSpy = jasmine.createSpy().and.returnValue({
    then: function(cb){
      cb(result);
      return {
        catch: function (ccb) {
          ccb();
        }
      };
    }
  });

  var clearSpy = jasmine.createSpy().and.returnValue({
    then: function(cb){
      cb(result);
      return {
        catch: function (ccb) {
          ccb();
        }
      };
    }
  });
})();