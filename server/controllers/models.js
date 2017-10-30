const { getAll, getById } = require('../models');

function getModels(req, res) {
  res.json(getAll());
}

function getModel(req, res) {
  const { id } = req.params;
  res.json(getById(parseInt(id, 10)));
}

module.exports = { getModels, getModel };
