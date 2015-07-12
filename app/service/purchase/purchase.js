/**
 * Purchase Service module.
 *
 * @module CartApp.service.purchase
 */
(function () {
  'use strict';
  
  angular
    .module('CartApp.service.purchase',[
      'ngResource'
    ])
    .factory('PurchaseService', PurchaseService);

  PurchaseService.$inject = ['$resource'];

  /**
   * 
   * @class PurchaseService
   * @constructor
   */
  function PurchaseService($resource){
    return $resource('/api/purchase', {});
  }
})();


