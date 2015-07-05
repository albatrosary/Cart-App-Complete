(function(){
  'use strict';

  describe('Controller: CartsController', function () {

    beforeEach(module('CartApp.components.carts'));

    beforeEach(module('CartApp.value'));
    
    beforeEach(module('CartApp.mock.service.carts'));
    beforeEach(module('CartApp.mock.service.books'));
    beforeEach(module('CartApp.mock.service.users'));
    beforeEach(module('CartApp.mock.service.purchase'));

    var CartsController;

    beforeEach(inject(function ($controller) {
      CartsController = $controller('CartsController');
    }));

    describe('CartsController',function(){
      it('Test Case', function () {
        CartsController.activate();
      });
    });
  });
})();