(function(){
  'use strict';

  describe('Controller: UserController', function () {

    beforeEach(module('CartApp.user'));
    beforeEach(module('CartApp.mock.service.users'));

    var UserController;

    beforeEach(inject(function ($controller) {
      UserController = $controller('UserController');
    }));

    describe('UserController',function(){
      it('Test Case', function () {
        UserController.activate();
      });
    });
  });
})();