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

  ItemsController.$inject = ['BooksService'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function ItemsController(BooksService) {
  	console.log('ItemsController Constructor');
    this.BooksService = BooksService;
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
  };


  ItemsController.prototype.removeCart = function(isbn) {
    console.log('ItemsController removeCart Method');
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

  /**
   * Private Method
   */
  var setlist = function (items) {
    vm.items = items;
  };

  var error = function () {
  };

})();
