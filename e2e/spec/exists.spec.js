describe('protractor sample', function() {
  'use strict';

  beforeEach(function() {
    browser.get('http://localhost:9001');
  });

  it('itemlist test', function() {
    // menu
    var items = element(by.css('a[ng-link="itemlist"]'));
    items.click();
  });
});
