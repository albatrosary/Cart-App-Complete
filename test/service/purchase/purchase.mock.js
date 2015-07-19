(function() {
  'use strict';

  angular
    .module('CartApp.mock.service.purchase', [])
    .factory('PurchaseService', PurchaseService);

  var result = {};

  function PurchaseService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue({
    then: function(cb) {
      cb(result);
      return {
        catch: function(ccb) {
          /* Default Case Not Exeption; */
          ccb();
        }
      };
    }
  });

})();
