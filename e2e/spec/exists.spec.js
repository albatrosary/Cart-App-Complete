describe('protractor sample', function() {
  'use strict';

  beforeEach(function() {
    browser.get('http://localhost:9001');
  });

  it('Purchase test', function() {
    // menu
    var items = element(by.css('a[ng-link="itemlist"]'));
    items.click();

    var itemAddClick = function(rowIndex) {
      return aboutElement(rowIndex, by.css('a[ng-click="itemlist.addCart(data.isbn)"]'));
    };
    var itemRemoveClick = function(rowIndex) {
      return aboutElement(rowIndex, by.css('a[ng-click="itemlist.removeCart(data.isbn)"]'));
    };
    var aboutElement = function(rowIndex, selector) {
      return element(by.repeater('data in itemlist.items').row(rowIndex)).element(selector);
    };
    var i, count;
    for (i = 0; i < 5; i++) {
      itemAddClick(0).click();
    }
    count = element(by.css('.badge'));
    expect(count.getText()).toEqual('5');

    for (i = 0; i < 3; i++) {
      itemAddClick(1).click();
    }
    count = element(by.css('.badge'));
    expect(count.getText()).toEqual('8');

    for (i = 0; i < 2; i++) {
      itemRemoveClick(0).click();
    }
    count = element(by.css('.badge'));
    expect(count.getText()).toEqual('6');

    var carts = element(by.css('a[ng-link="carts"]'));
    carts.click();

    var purchase = element(by.css('input[ng-click="carts.purchase()"]'));
    purchase.click();

    var label;
    label = element.all(by.css('label')).first();
    expect(label.getText()).toEqual('名前');
    label = element.all(by.css('label')).get(1);
    expect(label.getText()).toEqual('住所');
    label = element.all(by.css('label')).get(2);
    expect(label.getText()).toEqual('電話');
    label = element.all(by.css('label')).last();
    expect(label.getText()).toEqual('メール');

    element(by.model('user.name')).sendKeys('佐川');
    element(by.model('user.address')).sendKeys('東京');
    element(by.model('user.tel')).sendKeys('090-9999-9999');
    element(by.model('user.mail')).sendKeys('xxxxxxxxxx@gmail.com');

    var userRegister = element(by.css('input[value="登録"]'));
    userRegister.click();

    carts.click();
    purchase.click();

    count = element(by.css('.badge'));
    expect(count.getText()).toEqual('0');
  });

  it('item view test', function() {
    // menu
    var items = element(by.css('a[ng-link="itemlist"]'));
    var itemClick = function(rowIndex) {
      return aboutElement(rowIndex, by.css('a[ng-link="item({isbn: data.isbn})"]'));
    };
    var aboutElement = function(rowIndex, selector) {
      return element(by.repeater('data in itemlist.items').row(rowIndex)).element(selector);
    };
    for (var i = 0; i < 3; i++) {
      items.click();
      itemClick(i).click();

      var itemTitle = element(by.css('h3'));

      if (i === 0) {
        expect(itemTitle.getText()).toEqual('絵で見てわかるWebアプリ開発の仕組み');
      }
      switch (i) {
        case 0:
          expect(itemTitle.getText()).toEqual('絵で見てわかるWebアプリ開発の仕組み');
          break;
        case 1:
          expect(itemTitle.getText()).toEqual('ブレイクスルーJavaScript');
          break;
        case 2:
          expect(itemTitle.getText()).toEqual('10日でおぼえるJSP＆サーブレット入門教室 第4版');
          break;
      }
    }
  });

  it('items view test', function() {
    // menu
    var items = element(by.css('a[ng-link="itemlist"]'));
    items.click();
    var title = element(by.css('.navbar-brand'));
    expect(title.getText()).toEqual('CartApp');

    var itemName = function(rowIndex) {
      return aboutElement(rowIndex, by.css('.media-heading'));
    };
    var aboutElement = function(rowIndex, selector) {
      return element(by.repeater('data in itemlist.items').row(rowIndex)).element(selector);
    };
    expect(itemName(0).getText()).toEqual('絵で見てわかるWebアプリ開発の仕組み');
    expect(itemName(1).getText()).toEqual('ブレイクスルーJavaScript');
    expect(itemName(2).getText()).toEqual('10日でおぼえるJSP＆サーブレット入門教室 第4版');
  });
});
