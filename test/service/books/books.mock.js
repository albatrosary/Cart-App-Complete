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
    'title': '絵で見てわかるWebアプリ開発の仕組み',
    'description': 'ゲーム、SNS、スケジュール管理、オンラインバンキング、ECサイト……、いまやWebアプリ／Webサービスを…',
    'author': '松村慎、 大久保洋介、 武田智道',
    'publisher': '翔泳社',
    'isbn': '9784798140889',
    'price': '2280',
    'image': 'images/001.jpg'
  },
  {
    'title': 'ブレイクスルーJavaScript',
    'description': 'JavaScriptの基本書は数多く存在しますが、実際の開発で、どうコードに落とし込めばいいかとなると…',
    'author': '太田智彬、 田辺丈士、 新井智士',
    'publisher': '翔泳社',
    'isbn': '9784798139050',
    'price': '2200',
    'image': 'images/002.png'
  },
  {
    'title': '10日でおぼえるJSP＆サーブレット入門教室 第4版',
    'description': '本書は、サーバーサイドJavaの基本となるJSP/サーブレット学習書です。すぐ動く・すぐわかる実習サンプルで…',
    'author': '山田祥寛',
    'publisher': '翔泳社',
    'isbn': '9784798140346',
    'price': '2800',
    'image': 'images/003.png'
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
