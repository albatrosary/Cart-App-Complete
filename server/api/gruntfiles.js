'use strict';

/**
 * This module is gruntfiles module.
 * @module server.api.gruntfiles
 */
exports = module.exports = function(app) {

  var json = require('../data/app.json');

  app.get('/api/gruntfiles', function(req, res) {
    res.status(200).json(json);
  });
};
