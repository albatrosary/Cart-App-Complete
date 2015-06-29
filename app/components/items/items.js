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

  ItemsController.$inject = ['BooksService', 'CartsService'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function ItemsController(BooksService, CartsService) {
  	console.log('ItemsController Constructor');
    this.BooksService = BooksService;
    this.CartsService = CartsService;
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
  };


  ItemsController.prototype.removeCart = function(isbn) {
    console.log('ItemsController removeCart Method');
    console.log(carts);
    vm.CartsService.remove(isbn);
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
