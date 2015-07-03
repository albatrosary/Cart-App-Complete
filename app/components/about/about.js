/**
 * This module is About Components module.
 * @module CartApp.components.about
 */
(function () {
  'use strict';

  angular
    .module('CartApp.about', [
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
   * My method description.  Like other pieces of your comment blocks, 
   * this can span multiple lines.
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
   * @property vm
   * @private
   */
  var vm;


  /**
   * @method setlist
   * @param {Object} list
   * @private
   */
  var setlist = function (list) {
    vm.list = list;
  };

  /**
   * @method error
   * @private
   */
  var error = function () {
  };
})();
