/**
 * This module is CartApp module.
 * @module CartApp
 */
(function () {
  'use strict';

  angular
    .module('CartApp', [
      'ngNewRouter',
      'ui.bootstrap',
      'CartApp.config',
      'CartApp.value',
      'CartApp.directive.message',
      'CartApp.items',
      'CartApp.item',
      'CartApp.carts',
      'CartApp.history',
      'CartApp.user'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['CartAppValue', '$rootScope'];

  AppController.$routeConfig = [
    { path: '/',            redirectTo: '/items' },
    { path: '/items',        component: 'items' },
    { path: '/item/:isbn',   component: 'item' },
    { path: '/carts',        component: 'carts' },
    { path: '/history',      component: 'history' },
    { path: '/user',         component: 'user' }
  ];

  function AppController(CartAppValue, $rootScope) {
    console.log('AppController Constructor');
    this.CartAppValue = CartAppValue;
    this.$rootScope = $rootScope;
    
    vm = this;    
    vm.$rootScope.$watch(cartsValue, cartsSet);
  }


  var vm;

  var cartsSet = function(value){
    vm.carts = value;
  };

  var cartsValue = function(){
    return vm.CartAppValue.carts;
  };
})();