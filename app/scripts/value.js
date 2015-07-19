/**
 * Value module.
 *
 * @module CartApp.value
 */
(function() {
  'use strict';

  angular
    .module('CartApp.value', [])
    .value('CartAppValue', {
      carts: 0
    });
})();
