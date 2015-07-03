/**
 * This module is Item Components module.
 * @module CartApp.components.item
 */
(function () {
  'use strict';

  angular
    .module('CartApp.item', [
      'CartApp.service.books'
    ])
    .controller('ItemController', ItemController);

  ItemController.$inject = ['$routeParams', 'BooksService'];
  /**
   * ItemController
   *
   * @class ItemController
   * @param {Object} $routeParams
   * @param {Object} BooksService
   * @constructor
   */
  function ItemController($routeParams, BooksService) {
  	console.log('ItemController Constructor');
    this.isbn = $routeParams.isbn;
    this.BooksService = BooksService;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  ItemController.prototype.activate = function() {
  	console.log('ItemController activate Method');
    vm = this;
    var books = vm.BooksService.get({isbn: this.isbn}).$promise;
    books
      .then(setItem);
  };

  /**
   * @property vm
   * @private
   */ 
  var vm;

  /**
   * @method setItem
   * @private
   */
  var setItem = function (item) {
    vm.title       = item.title;
    vm.description = item.description;
    vm.author      = item.author;
    vm.publisher   = item.publisher;
    vm.isbn        = item.isbn;
    vm.price       = item.price;
  };
})();
