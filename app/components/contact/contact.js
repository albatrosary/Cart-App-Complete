/**
 * Contact Components module.
 *
 * @module CartApp.components.contact
 */
(function () {
  'use strict';

  angular
    .module('CartApp.components.contact', [])
    .controller('ContactController', ContactController);

  ContactController.$inject = [];

  /**
   * ContactController
   *
   * @class ContactController
   * @constructor
   */
  function ContactController() {
    console.log('ContactController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
  *
  * @method activate
  * @param {String} foo Argument 1
  * @param {Object} config A config object
  * @param {String} config.name The name on the config object
  * @param {Function} config.callback A callback function on the config object
  * @param {Boolean} [extra=false] Do extra, optional work
  * @return {Boolean} Returns true on success
  */
  ContactController.prototype.activate = function() {
    console.log('ContactController activate Method');
    vm = this;
    vm.case1 = 20;
    someMethod();
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @private
   */
  var vm;

  /**
   * @method someMethod
   * @private
   */
  var someMethod = function() {
    vm.case2 = 10;
  };
})();
