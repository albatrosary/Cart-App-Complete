/**
 * 
 *
 * @deprecated 
 * @module components/items
 */
(function () {
  'use strict';

  angular
    .module('CartApp.items', [])
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['BooksService', 'CartsService', 'CartAppValue'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function ItemsController(BooksService, CartsService, CartAppValue) {
  	console.log('ItemsController Constructor');
    this.BooksService = BooksService;
    this.CartsService = CartsService;
    this.CartAppValue = CartAppValue;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
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
   * Static property
   */

  /**
   * Static method, assigned to class
   */

  /**
   * Private property
   */
  var vm;

  var carts = [];

  /**
   * Private Method
   */
  var setlist = function (items) {
    vm.items = items;
  };

  var error = function () {
  };

})();
