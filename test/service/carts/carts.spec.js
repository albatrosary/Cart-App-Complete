(function() {
  'use strict';

  describe('Service: CartsService', function() {

    var CartsService, $rootScope;

    beforeEach(module('CartApp.service.carts'));

    beforeEach(inject(function(_$rootScope_, _CartsService_) {
      CartsService = _CartsService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();
