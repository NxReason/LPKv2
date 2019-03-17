const modelOne = require('./1');
const modelTwo = require('./2');

const models = [ modelOne, modelTwo ];

function all() {
  return models;
}

function get(id) {
  const model = models.find(m => m.uuid === id);
  return model;
}

module.exports = { all, get };