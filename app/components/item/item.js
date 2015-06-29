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
    vm.item = item;
  };

  // var item = {
  //   title: 'タイトル１',
  //   description: 'これはタイトル１です',
  //   author: '作成者',
  //   publisher: '出版社',
  //   isbn: '111-1-1234-5678-9',
  //   price: '1000'
  // };
  /**
   * Private Method
   */

})();
