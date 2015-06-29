/**
 * 
 *
 * @deprecated 
 * @module components/history
 */
(function () {
  'use strict';

  angular
    .module('CartApp.history', [])
    .controller('HistoryController', HistoryController);

  HistoryController.$inject = [];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function HistoryController() {
  	console.log('HistoryController Constructor');
    vm = this;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  HistoryController.prototype.activate = function() {
  	console.log('HistoryController activate Method');
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

})();
