/**
 * This module is Carts Components module.
 * @module CartApp.components.carts
 */
(function () {
  'use strict';

  angular
    .module('CartApp.carts', [
      'CartApp.service.carts',
      'CartApp.service.books',
      'CartApp.service.users',
      'CartApp.service.purchase'
    ])
    .controller('CartsController', CartsController);

  CartsController.$inject = ['CartsService', 'BooksService', 'UsersService', 'PurchaseService', 'CartAppValue','$location'];
  
  /**
   * CartsController
   *
   * @class CartsController
   * @param {Object} CartsService
   * @param {Object} BooksService
   * @param {Object} UsersService
   * @param {Object} PurchaseService
   * @param {Object} CartAppValue
   * @param {Object} $location
   * @constructor
   */
  function CartsController(CartsService, BooksService, UsersService, PurchaseService, CartAppValue, $location) {
  	console.log('CartsController Constructor');
    this.CartsService = CartsService;
    this.BooksService = BooksService;
    this.UsersService = UsersService;
    this.PurchaseService = PurchaseService;
    this.CartAppValue = CartAppValue;
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
   * @property vm
   * @private
   */
  var vm;

  /**
   * @method setBooks
   * @param {Object} book
   * @private
   */
  var setBooks = function (book) {
    var carts = vm.CartsService.get();
    vm.list.push({
      title: book.title,
      count: carts[book.isbn]
    }); 
  };

  /**
   * @method register
   * @param {Object} user
   * @private
   */
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
          vm.CartAppValue.carts = 0;
          vm.$location.path('/items');
        });
    } else {
      vm.$location.path('/user');
    }
  };

})();
