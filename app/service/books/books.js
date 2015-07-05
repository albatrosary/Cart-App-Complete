/**
 * Books Service module.
 *
 * @module CartApp.service.books
 */
(function () {
  'use strict';
  
  angular
    .module('CartApp.service.books',[
      'ngResource'
    ])
    .factory('BooksService', BooksService);

  BooksService.$inject = ['$resource'];

  /**
   * 
   * @class BooksService
   * @constructor
   */
  function BooksService($resource){
    return $resource('/api/books/:isbn', {});
  }

})();


