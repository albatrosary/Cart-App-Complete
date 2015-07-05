/**
 * Items Components module.
 *
 * @module CartApp.components.items
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.items', [
      'CartApp.service.books',
      'CartApp.service.carts'
    ])
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['BooksService', 'CartsService', 'CartAppValue'];
  
  /**
   * ItemsController
   *
   * @class ItemsController
   * @param {Object} BooksService
   * @param {Object} CartsService
   * @param {Object} CartAppValue
   * @constructor
   */
  function ItemsController(BooksService, CartsService, CartAppValue) {
  	console.log('ItemsController Constructor');
    this.BooksService = BooksService;
    this.CartsService = CartsService;
    this.CartAppValue = CartAppValue;
  }

  /**
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemsController.prototype.activate = function() {
  	console.log('ItemsController activate Method');
    vm = this;
    var books = vm.BooksService.query().$promise;
    books
      .then(setlist)
      .catch(error);
  };


  ItemsController.prototype.addCart = function(isbn) {
    console.log('ItemsController addCart Method');
    vm.CartsService.add(isbn);
    vm.CartAppValue.carts = vm.CartAppValue.carts+1;
  };


  ItemsController.prototype.removeCart = function(isbn) {
    console.log('ItemsController removeCart Method');
    console.log(carts);
    vm.CartsService.remove(isbn);
    if (vm.CartAppValue.carts > 0 ) {
      vm.CartAppValue.carts = vm.CartAppValue.carts-1;
    }
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */ 
  var vm;

  /**
   * @property carts
   * @private
   */ 
  var carts = [];

  /**
   * @method setlist
   * @private
   */
  var setlist = function (items) {
    vm.items = items;
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
