(function(){
  'use strict';

  describe('Controller: ItemsController', function () {

    beforeEach(module('CartApp.items'));
    beforeEach(module('CartApp.mock.service.books'));

    var ItemsController;

    beforeEach(inject(function ($controller) {
      ItemsController = $controller('ItemsController');
    }));

    describe('ItemsController',function(){
      it('Test Case', function () {
        ItemsController.activate();
      });
    });
  });
})();