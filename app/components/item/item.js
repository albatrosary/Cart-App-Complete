/**
 * 
 *
 * @deprecated 
 * @module components/item
 */
(function () {
  'use strict';

  angular
    .module('CartApp.item', [])
    .controller('ItemController', ItemController);

  ItemController.$inject = ['$routeParams', 'BooksService'];
  /**
   * AboutController
   *
   * @class AboutController
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
   * Static property
   */

  /**
   * Static method, assigned to class
   */

  /**
   * Private property
   */
  var vm;

  var setItem = function (item) {
    vm.title       = item.title;
    vm.description = item.description;
    vm.author      = item.author;
    vm.publisher   = item.publisher;
    vm.isbn        = item.isbn;
    vm.price       = item.price;
  };

  /**
   * Private Method
   */

})();
