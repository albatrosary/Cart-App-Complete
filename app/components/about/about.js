/**
 * About Components module.
 *
 * @module CartApp.components.about
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.about', [
      'CartApp.service.gruntfiles'
    ])
    .controller('AboutController', AboutController);

  AboutController.$inject = ['GruntfilesService'];

  /**
   * AboutController
   *
   * @class AboutController
   * @param {Object} GruntfilesService
   * @constructor
   */
  function AboutController(GruntfilesService) {
    console.log('AboutController Constructor');

    this.GruntfilesService = GruntfilesService;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AboutController.prototype.activate = function() {
    console.log('AboutController Method activate');

    vm = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt
      .then(setlist)
      .catch(error);
  };

  /**
   * Angular ViewModel
   *
   * @type Object
   * @default 'this'
   * @private
   */
  var vm;

  /**
   * Setting user data to ViewModel
   *
   * @method setlist
   * @param {Object} list - Gruntfiles List
   * @private
   */
  var setlist = function (list) {
    vm.list = list;
  };

  /**
   * It will capture the error at the time of data acquisition
   *
   * @method error
   * @param {Object} e - error message
   * @private
   */
  var error = function (e) {
    vm.errors = e;
  };
})();
