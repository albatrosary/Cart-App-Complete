(function () {
  'use strict';

  describe('Service: UsersService', function () {

    var UsersService, $rootScope;

    beforeEach(module('CartApp.service.users'));

    beforeEach(inject(function (_$rootScope_, _UsersService_) {
      UsersService = _UsersService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing',function(){
      it('someThing',function(){

      });
    });
  });
})();