/**
 * 
 *
 * @deprecated 
 * @module components/user
 */
(function () {
  'use strict';

  angular
    .module('CartApp.user', [])
    .controller('UserController', UserController);

  UserController.$inject = ['UsersService'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function UserController(UsersService, $location) {
  	console.log('UserController Constructor');
    this.UsersService = UsersService;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  UserController.prototype.activate = function() {
  	console.log('UserController activate Method');
    vm = this;
    var users = vm.UsersService.query().$promise;
    users
      .then(setUsers);
  };

  UserController.prototype.register = function() {
    console.log('UserController register Method');
    var user = {
      name: vm.name,
      address: vm.address,
      tel: vm.tel,
      mail: vm.mail
    };

    var users = vm.UsersService.save(user).$promise;
    users
      .then(saveSuccess)
      .catch(error);
  };

  UserController.prototype.delete = function() {
    console.log('UserController delete Method');
    var users = vm.UsersService.delete().$promise;
    users
      .then(deleteSuccess)
      .catch(error);
  };

  UserController.prototype.closeAlert = function () {
    console.log('close');
    vm.status = '';
    vm.message = '';
  };
  /**
   * Static property
   */

  /**
   * Static method, assigned to class
   */

  /**
   * Private property
   */
  var vm;

  /**
   * Private Method
   */
  var setUsers = function (user) {
    if (!user[0]) {
      return;
    }
    vm.name = user[0].name;
    vm.address = user[0].address;
    vm.tel = user[0].tel;
    vm.mail = user[0].mail; 
  };
  
  var saveSuccess = function () {
    vm.status = 'success';
    vm.message = '登録されました';
  };

  var deleteSuccess = function () {
    vm.status = 'success';
    vm.message = '削除しました';
  };
  
  var error = function (e) {
    vm.status = 'dengire';
    vm.message = 'エラーが発生しました：'+e;
  };

})();
