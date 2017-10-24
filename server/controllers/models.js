const stubModels = [
  { name: 'model1', uuid: 0 },
  { name: 'model2', uuid: 1 },
];

function getModels(req, res) {
  res.json(stubModels);
}

function getModel(req, res) {
  const { id } = req.params;
  res.json(stubModels[id]);
}

module.exports = { getModels, getModel };
