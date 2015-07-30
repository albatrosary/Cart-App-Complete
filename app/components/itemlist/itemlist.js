/**
 * Items Components module.
 *
 * @module CartApp.components.items
 */
(function() {
  'use strict';

  angular
    .module('CartApp.components.itemlist', [
      'CartApp.service.books',
      'CartApp.service.carts'
    ])
    .controller('ItemlistController', ItemlistController);

  ItemlistController.$inject = ['BooksService', 'CartsService', 'CartAppValue'];

  /**
   * ItemlistController
   *
   * @class ItemlistController
   * @param {Object} BooksService
   * @param {Object} CartsService
   * @param {Object} CartAppValue
   * @constructor
   */
  function ItemlistController(BooksService, CartsService, CartAppValue) {
    console.log('ItemlistController Constructor');
    this.BooksService = BooksService;
    this.CartsService = CartsService;
    this.CartAppValue = CartAppValue;
  }

  /**
   * Before switching to a new component, this hook runs for each active component in the app. If any of them return false, a rejected promise, or a promise that resolves to false, the navigation is cancelled.
   * This hook is useful for authentication.
   *
   * @method canActivate
   */
  ItemlistController.prototype.canActivate = function() {
    console.log('ItemlistController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   * This hook fires just before the nagivation finishes.
   * This hook is useful for cases where you want your component to do some intensive work.
   *
   * @method activate
   */
  ItemlistController.prototype.activate = function() {
    console.log('ItemlistController activate Method');
    vm = this;
    var books = vm.BooksService.query().$promise;
    books
      .then(setlist)
      .catch(error);
  };

  /**
   * This hook fires for each component that is removed as part of navigation. canDeactivate fires before any new components are instantiated. If any of them return false, a rejected promise, or a promise that resolves to false, the navigation is cancelled.
   * canDeactivate is useful for making sure that data is properly persisted before navigating away.
   */
  ItemlistController.prototype.canDeactivate = function() {
    console.log('ItemlistController canDeactivate Method');
    return true;
  };

  /**
   * This hook fires for each component that is removed as part of navigation. deactivate is useful for doing cleanup work.
   * This hook fires after the canActivate of the new component and canDeactivate of the component to be removed, but before activate of the new component.
   */
  ItemlistController.prototype.deactivate = function() {
    console.log('ItemlistController deactivate Method');
  };

  ItemlistController.prototype.addCart = function(isbn) {
    console.log('ItemlistController addCart Method');
    vm.CartsService.add(isbn);
    vm.CartAppValue.carts = vm.CartAppValue.carts + 1;
  };

  ItemlistController.prototype.removeCart = function(isbn) {
    console.log('ItemlistController removeCart Method');
    vm.CartsService.remove(isbn);
    if (vm.CartAppValue.carts > 0) {
      vm.CartAppValue.carts = vm.CartAppValue.carts - 1;
    }
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */
  var vm;

  /**
   * @property carts
   * @private
   */
  var carts = [];

  /**
   * @method setlist
   * @private
   */
  var setlist = function (items) {
    vm.items = items;
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
