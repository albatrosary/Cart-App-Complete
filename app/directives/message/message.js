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
      console.log(scope);
      console.log(element);
      console.log(attrs);
      console.log(ctrl);
    }

    return {
      restrict: 'AE',
      replace: false,
      templateUrl: 'directives/message/message.html',
      scope: {
        text: '=',
        status: '='
      },
      link: messageLink
    };
  }
})();