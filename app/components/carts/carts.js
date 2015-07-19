/**
 * Carts Components module.
 *
 * @module CartApp.components.carts
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.carts', [
      'CartApp.service.carts',
      'CartApp.service.books',
      'CartApp.service.users',
      'CartApp.service.purchase'
    ])
    .controller('CartsController', CartsController);

  CartsController.$inject = ['CartsService', 'BooksService', 'UsersService', 'PurchaseService', 'CartAppValue', '$location', '$q'];

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
  function CartsController(CartsService, BooksService, UsersService, PurchaseService, CartAppValue, $location, $q) {
    console.log('CartsController Constructor');
    this.CartsService = CartsService;
    this.BooksService = BooksService;
    this.UsersService = UsersService;
    this.PurchaseService = PurchaseService;
    this.CartAppValue = CartAppValue;
    this.$location = $location;
    this.$q = $q;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CartsController.prototype.activate = function() {
    console.log('CartsController activate Method');
    vm = this;
    vm.list = [];
    var carts = vm.CartsService.get();
    for (var isbn in carts) {
      var books = vm.BooksService.get({isbn: isbn}).$promise;
      books
        .then(setBooks)
        .catch(error);
    }
  };

  /**
   * To buy goods that have registered to cart.
   *
   * @method purchase
   */
  CartsController.prototype.purchase = function() {
    console.log('CartsController purchase Method');

    deferred = vm.$q.defer();
    var users = vm.UsersService.query().$promise;
    users
      .then(checkUser)
      .then(register)
      .then(clear)
      .catch(error);
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */
  var vm;

  var deferred;

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

  var checkUser = function (user) {

    if (user.length === 0) {
      vm.$location.path('/user');
      deferred.reject('user is not registered.');
      return deferred.promise;
    }

    deferred.resolve(user[0]);

    return deferred.promise;
  };

  /**
   * @method register
   * @param {Object} response
   * @private
   */
  var register = function (response) {
    console.log('register');

    var purchase = vm.CartsService.purchase();

    return vm.PurchaseService.save(purchase).$promise;
  };

  var clear = function (response) {
    vm.CartsService.clear();
    vm.CartAppValue.carts = 0;
    vm.$location.path('/items');
  };

  /**
   * It will capture the error at the time of data acquisition
   *
   * @method error
   * @param {Object} e error message
   * @private
   */
  var error = function (e) {
    vm.error = e;
  };

})();
