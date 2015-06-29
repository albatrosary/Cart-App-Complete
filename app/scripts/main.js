// jshint devel:true
(function () {
  'use strict';

  angular
    .module('CartApp', [
      'ngNewRouter',
      'CartApp.service.books',
      'CartApp.service.users',
      'CartApp.service.carts',
      'CartApp.service.purchase',
      'CartApp.config',
      'CartApp.items',
      'CartApp.item',
      'CartApp.carts',
      'CartApp.history',
      'CartApp.user'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',            redirectTo: '/items' },
    { path: '/items',        component: 'items' },
    { path: '/item/:isbn',   component: 'item' },
    { path: '/carts',        component: 'carts' },
    { path: '/history',      component: 'history' },
    { path: '/user',         component: 'user' }
  ];

  function AppController () {}
})();