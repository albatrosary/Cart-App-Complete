/**
 * Item Components module.
 *
 * @module CartApp.components.item
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.item', [
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
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemController.prototype.activate = function() {
    console.log('ItemController activate Method');
    vm = this;
    var books = vm.BooksService.get({isbn: this.isbn}).$promise;
    books
      .then(setItem)
      .catch(error);
  };

  /**
   * Angular ViewModel
   *
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
    vm.image       = item.image;
  };

  /**
   * It will capture the error at the time of Gruntfile data acquisition
   *
   * @method error
   * @param {Object} e error message
   * @private
   */
  var error = function (e) {
    vm.error = e;
  };
})();
