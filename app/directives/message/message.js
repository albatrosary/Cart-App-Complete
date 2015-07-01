(function () {
  'use strict';

  angular
    .module('CartApp.directive.message',[])
    .directive('cartAppMessage', messageDirective);

  messageDirective.$inject = [];

  /**
   * 
   * @class messageDirective
   * @constructor
   */
  function messageDirective(){
    function messageLink(scope, element, attrs, ctrl){
      scope.close = function () {
        // scope.text = '';
        // scope.status = '';
      };
    }

    return {
      restrict: 'AE',
      transclude:true,
      replace:true,
      templateUrl: 'directives/message/message.html',
      scope: {
        text: '=',
        status: '=',
        close: '&'
      },
      link: messageLink
    };
  }
})();