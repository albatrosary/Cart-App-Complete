(function () {
  'use strict';
  
  angular
    .module('CartApp.service.aaaaa',[])
    .factory('AaaaaService', AaaaaService);

  AaaaaService.$inject = [];

  /**
   * 
   * @class AaaaaService
   * @constructor
   */
  function AaaaaService(){
    
    var someProperty={};

    var aaaaaService = {
      someMethod: function () {
        return;
      }
    };
    return aaaaaService;
  }

})();


