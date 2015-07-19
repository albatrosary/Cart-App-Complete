'use strict';

/**
 * This module is purchase module.
 * @module server.api.purchase
 */
exports = module.exports = function(app) {

  var purchase = [];

  app.get('/api/purchase', function(req, res) {
    // something
    console.log('purchase', purchase);
    res.status(200).json(purchase);
  });

  app.get('/api/purchase/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.status(200).json(purchase);
  });

  app.post('/api/purchase', function(req, res) {
    // something
    console.log(req.body);
    purchase.push({
      'datetime': (new Date()).toLocaleString(),
      'items': req.body
    });
    console.log(purchase);
    res.sendStatus(200);
  });

  app.put('/api/purchase', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.delete('/api/purchase/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.sendStatus(200);
  });

  app.delete('/api/purchase', function(req, res) {
    // something
    res.sendStatus(200);
  });
};
