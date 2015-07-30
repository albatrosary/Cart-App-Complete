(function() {
  'use strict';

  describe('Controller: ItemlistController', function() {

    beforeEach(module('CartApp.components.itemlist'));
    beforeEach(module('CartApp.value'));
    beforeEach(module('CartApp.mock.service.books'));

    var ItemlistController;

    beforeEach(inject(function($controller) {
      ItemlistController = $controller('ItemlistController');
    }));

    describe('ItemlistController', function() {
      it('Test Case', function() {
        ItemlistController.activate();
        expect(ItemlistController.items.length).toEqual(3);
        expect(ItemlistController.items[0].title).toEqual('絵で見てわかるWebアプリ開発の仕組み');
      });
    });
  });
})();
