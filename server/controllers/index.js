const template = require('../views');

function index(req, res) {
  res.status(200).send(template);
}

module.exports = {
  index
};
