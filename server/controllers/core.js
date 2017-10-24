const template = require('../views');

function index(req, res) {
  res.status(200).send(template);
}

function apiNotFound(req, res) {
  res.status(404).json({ statusCode: 404, message: 'Can\'t find endpoint' });
}

function notFound(req, res) {
  res.status(404).send('Page not found');
}

module.exports = {
  index,
  apiNotFound,
  notFound
};
