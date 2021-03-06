/**
 * Message Directive module.
 *
 * @module CartApp.directive.message
 */
(function () {
  'use strict';

  angular
    .module('CartApp.directive.message', [])
    .directive('cartAppMessage', messageDirective);

  messageDirective.$inject = [];

  /**
   * messageDirective
   *
   * @class messageDirective
   * @constructor
   */
  function messageDirective() {

    return {
      restrict: 'AE',
      transclude:true,
      replace:true,
      templateUrl: 'directives/message/message.html',
      scope: {
        text: '=',
        status: '=',
        close: '&'
      }
    };
  }
})();
