(function() {
  'use strict';

  angular
    .module('CartApp.mock.service.books', [])
    .factory('BooksService', BooksService);

  function BooksService() {
    return {
      get: getSpy,
      query: querySpy
    };
  }

  var result = [
    {
      'title': 'AngularJSリファレンス',
      'description': 'Web開発者界隈で非常に注目度が上がっているAngularJSは、フルスタックであることを特長としています。',
      'author': '池添 明宏, 金井 健一, 吉田 徹生',
      'publisher': '出版社',
      'isbn': '978-4-8443-3668-6',
      'price': '3800'
    },
    {
      'title': 'はじめてのAngularJS―「双方向データ結合」&「依存性注入」 「Mode」「View」「Controller」に分離して作業を明確化!',
      'description': 'Todoリスト・アプリを作りながら、AngularJSの操作方法を学べる本。',
      'author': '吉田 徹生',
      'publisher': '出版社',
      'isbn': '978-4-7775-1808-1',
      'price': '2052'
    },
    {
      'title': 'シングルページWebアプリケーション ―Node.js、MongoDBを活用したJavaScript SPA',
      'description': 'Todoリスト・アプリを作りながら、AngularJSの操作方法を学べる本。',
      'author': 'Michael S. Mikowski (著), Josh C. Powell (著), 佐藤 直生 (監訳), 木下 哲也 (翻訳)',
      'publisher': '出版社',
      'isbn': '978-4-87311-673-0',
      'price': '4104'
    }
  ];

  var getSpy = jasmine.createSpy().and.returnValue({
    $promise: {
      then: function(cb) {
        cb(result);
        return {
          catch: function(ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    }
  });

  var querySpy = jasmine.createSpy().and.returnValue({
    $promise: {
      then: function(cb) {
        cb(result);
        return {
          catch: function(ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    }
  });

})();
