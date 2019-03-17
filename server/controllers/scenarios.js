const { scenarios } = require('../models');

function all(req, res) {
  res.json(scenarios.all());
}

function get(req, res) {
  const { id } = req.params;
  res.json(scenarios.get(id));
}

module.exports = { all, get };
