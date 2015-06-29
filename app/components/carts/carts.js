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

  CartsController.$inject = [];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function CartsController() {
  	console.log('CartsController Constructor');
    vm = this;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  CartsController.prototype.activate = function() {
  	console.log('CartsController activate Method');
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

})();
