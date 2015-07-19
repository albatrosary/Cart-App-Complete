(function() {
  'use strict';

  describe('Controller: ItemsController', function() {

    beforeEach(module('CartApp.components.items'));
    beforeEach(module('CartApp.value'));
    beforeEach(module('CartApp.mock.service.books'));

    var ItemsController;

    beforeEach(inject(function($controller) {
      ItemsController = $controller('ItemsController');
    }));

    describe('ItemsController', function() {
      it('Test Case', function() {
        ItemsController.activate();
        expect(ItemsController.items.length).toEqual(3);
        expect(ItemsController.items[0].title).toEqual('AngularJSリファレンス');
      });
    });
  });
})();
