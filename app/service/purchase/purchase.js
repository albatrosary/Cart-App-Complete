(function () {
  'use strict';
  
  angular
    .module('CartApp.service.purchase',[])
    .factory('PurchaseService', PurchaseService);

  PurchaseService.$inject = ['$resource'];

  /**
   * 
   * @class PurchaseService
   * @constructor
   */
  function PurchaseService($resource){
    
    var purchaseService = $resource('/api/purchase', {});
    return purchaseService;
  }
})();


