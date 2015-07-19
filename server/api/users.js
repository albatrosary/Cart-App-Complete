'use strict';

/**
 * This module is users module.
 * @module server.api.users
 */
exports = module.exports = function(app) {

  var users = [];

  app.get('/api/users', function(req, res) {
    // something
    console.log('/api/users', users);
    res.status(200).json(users);
  });

  app.get('/api/users/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.status(200).json(users);
  });

  app.post('/api/users', function(req, res) {
    // something
    users = [req.body];
    console.log('/api/users(post)', users);
    res.sendStatus(200);
  });

  app.put('/api/users', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.delete('/api/users/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.sendStatus(200);
  });

  app.delete('/api/users', function(req, res) {
    // something
    users = [];
    res.sendStatus(200);
  });
};
