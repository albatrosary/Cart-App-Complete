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
  function CartsService(){
    
    var carts=[];

    var cartsService = {
      get: function () {
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
        if (!carts[isbn]) {
        } else {
          if (carts[isbn] === 0) {
            return ;
          }
          carts[isbn] = carts[isbn]-1;
        }
      },
    };
    return cartsService;
  }

})();


