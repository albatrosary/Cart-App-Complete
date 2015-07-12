/**
 * History Components module.
 *
 * @module CartApp.components.history
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.history', [
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
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  HistoryController.prototype.activate = function() {
  	console.log('HistoryController activate Method');
    vm = this;
    vm.list = [];
    var purchase = vm.PurchaseService.query().$promise;
    purchase
      .then(setList)
      .catch(error);
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */ 
  var vm;

  var setList = function (data) {
    data.items = angular.toJson(data.items);
    vm.list = data;
  };
  
  /**
   * It will capture the error at the time of Gruntfile data acquisition
   * 
   * @method error
   * @param e {Object} error message
   * @private
   */
  var error = function (e) {
    vm.error = e;
  };

})();
