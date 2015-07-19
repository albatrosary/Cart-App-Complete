(function() {
  'use strict';

  describe('Service: BooksService', function() {

    var BooksService, $rootScope;

    beforeEach(module('CartApp.service.books'));

    beforeEach(inject(function(_$rootScope_, _BooksService_) {
      BooksService = _BooksService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();
