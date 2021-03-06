/**
 * User Components module.
 *
 * @module CartApp.components.user
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.user', [
      'CartApp.service.users'
    ])
    .controller('UserController', UserController);

  UserController.$inject = ['UsersService'];
  /**
   * UserController
   *
   * @class UserController
   * @param {Object} UsersService
   * @param {Object} $location
   * @constructor
   */
  function UserController(UsersService, $location) {
    console.log('UserController Constructor');
    this.UsersService = UsersService;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
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

  /**
   * @method register
   */
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

  /**
   * @method delete
   */
  UserController.prototype.delete = function() {
    console.log('UserController delete Method');
    var users = vm.UsersService.delete().$promise;
    users
      .then(deleteSuccess)
      .catch(error);
  };

  /**
   * @method closeAlert
   */
  UserController.prototype.closeAlert = function () {
    console.log('close');
    vm.status = '';
    vm.message = '';
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */
  var vm;

  /**
   * @method setUsers
   * @param {Object} user
   * @private
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

  /**
   * @method saveSuccess
   * @private
   */
  var saveSuccess = function () {
    vm.status = 'success';
    vm.message = '登録されました';
  };

  /**
   * @method deleteSuccess
   * @private
   */
  var deleteSuccess = function () {
    vm.status = 'success';
    vm.message = '削除しました';
  };

  /**
   * It will capture the error at the time of Gruntfile data acquisition
   *
   * @method error
   * @param {Object} e error message
   * @private
   */
  var error = function (e) {
    vm.status = 'dengire';
    vm.message = 'エラーが発生しました：' + e;
  };

})();
