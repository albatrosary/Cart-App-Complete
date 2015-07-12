/**
 * Carts Service module.
 *
 * @module CartApp.service.carts
 */
(function () {
  'use strict';
  
  angular
    .module('CartApp.service.carts',[])
    .factory('CartsService', CartsService);

  CartsService.$inject = [];

  /**
   * 
   * @class CartsService
   * @constructor
   */
  function CartsService () {
    return cartsService;
  }

  var carts=[];

  var cartsService = {
    purchase: function () {
      var _carts = [];
      for(var isbn in carts) {
        var item = {
          'isbn': isbn,
          'count': carts[isbn]
        };
        _carts.push(item);
      }
      return _carts;
    },
    get: function () {
      console.log('CartsService', carts);
      return carts;
    },
    add: function (isbn) {
      if (!carts[isbn]) {
        carts[isbn] = 1;
      } else {
        carts[isbn] = carts[isbn]+1;
      }
    },
    remove: function (isbn) {
      if (!carts[isbn] || carts[isbn] === 0) {
        return ;
      }

      carts[isbn] = carts[isbn]-1;
      if (carts[isbn] === 0) {
        delete carts[isbn];
      }
    },
    clear: function () {
      carts=[];
    }
  };

})();


