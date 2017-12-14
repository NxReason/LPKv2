const model1  = require('./1');
const model2 = require('./2');

const stubModels = [ model1, model2 ];

function getAll() {
  return stubModels;
}

function getById(id) {
  return stubModels.find(m => m.uuid === id);
}

module.exports = {
  getAll,
  getById
};
