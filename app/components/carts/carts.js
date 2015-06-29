/**
 * 
 *
 * @deprecated 
 * @module components/carts
 */
(function () {
  'use strict';

  angular
    .module('CartApp.carts', [])
    .controller('CartsController', CartsController);

  CartsController.$inject = ['CartsService', 'BooksService', 'UsersService', 'PurchaseService', '$location'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function CartsController(CartsService, BooksService, UsersService, PurchaseService, $location) {
  	console.log('CartsController Constructor');
    this.CartsService = CartsService;
    this.BooksService = BooksService;
    this.UsersService = UsersService;
    this.PurchaseService = PurchaseService;
    this.$location = $location;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  CartsController.prototype.activate = function() {
  	console.log('CartsController activate Method');
    vm = this;
    vm.list = [];
    var carts = vm.CartsService.get();
    for(var isbn in carts) {
      var books = vm.BooksService.get({isbn: isbn}).$promise;
      books
        .then(setBooks);
    }
  };

  CartsController.prototype.purchase = function () {
    console.log('CartsController purchase Method');

    var users = vm.UsersService.query().$promise;
    users
      .then(register);
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
  var setBooks = function (book) {
    var carts = vm.CartsService.get();
    vm.list.push({
      title: book.title,
      count: carts[book.isbn]
    }); 
  };

  var register = function (user) {
    if(user[0]) {
      var carts = vm.CartsService.get();
      var purchase = [];
      for(var isbn in carts) {
        var item = {
          'isbn': isbn,
          'count': carts[isbn]
        };

        purchase.push(item);
      }

      var result = vm.PurchaseService.save(purchase).$promise;
      result
        .then(function () {
          vm.CartsService.clear();
          vm.$location.path('/items');
        });
    } else {
      vm.$location.path('/user');
    }
  };

})();
