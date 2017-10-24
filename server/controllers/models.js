function getModels(req, res) {
  res.json([
    { name: 'model1', uuid: 42 },
    { name: 'model2', uuid: 66 }
  ]);
}

module.exports = { getModels };
