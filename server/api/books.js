'use strict';

/**
 * This module is books module.
 * @module server.api.books
 */
exports = module.exports = function(app) {

  var books = require('../data/books.json');

  app.get('/api/books', function(req, res) {
    // something
    res.status(200).json(books);
  });

  app.get('/api/books/:id', function(req, res) {
    var id = req.params.id;
    // something
    var book = books.filter(function(item, index) {
      if (item.isbn === id) {
        return true;
      }
    });
    res.status(200).json(book[0]);
  });

  app.post('/api/books', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.put('/api/books', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.delete('/api/books/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.sendStatus(200);
  });

  app.delete('/api/books', function(req, res) {
    // something
    res.sendStatus(200);
  });
};
