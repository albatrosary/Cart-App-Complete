(function() {
  'use strict';

  describe('Controller: ItemController', function() {

    beforeEach(module('CartApp.components.item'));
    beforeEach(module('CartApp.value'));
    beforeEach(module('CartApp.mock.service.books'));

    var ItemController;

    beforeEach(inject(function($controller) {
      ItemController = $controller('ItemController', {
        $routeParams: {id: 'aaa'}
      });
    }));

    describe('ItemController', function() {
      it('Test Case', function() {
        ItemController.activate();
      });
    });
  });
})();
