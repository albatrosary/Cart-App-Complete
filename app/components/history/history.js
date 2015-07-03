/**
 * This module is History Components module.
 * @module CartApp.components.history
 */
(function () {
  'use strict';

  angular
    .module('CartApp.history', [
      'CartApp.service.purchase'
    ])
    .controller('HistoryController', HistoryController);

  HistoryController.$inject = ['PurchaseService'];
  /**
   * HistoryController
   *
   * @class HistoryController
   * @param {Object} PurchaseService
   * @constructor
   */
  function HistoryController(PurchaseService) {
  	console.log('HistoryController Constructor');
    this.PurchaseService = PurchaseService;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  HistoryController.prototype.activate = function() {
  	console.log('HistoryController activate Method');
    vm = this;
    vm.list = [];
    var purchase = vm.PurchaseService.query().$promise;
    purchase
      .then(function (data) {
        data.items = angular.toJson(data.items);
        vm.list = data;
      });

  };

  /**
   * @property vm
   * @private
   */ 
  var vm;
})();
