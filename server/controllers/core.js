const path = require('path');
const bcrypt = require('bcrypt');

const { users } = require('../models');
const template = require('../views');

function login(req, res) {
  res.status(200).sendFile(path.join(__dirname, '../views/login.html'));
}
function tryLogin(req, res) {
  const { username, password } = req.body;
  users.findOne({
      where: { name: username }
    })
    .then((user) => {
      if (!user) { res.redirect('/login'); }
      else {
        bcrypt.compare(password, user.password)
          .then(function(isValid) {
            if (isValid) {
              req.session.user = user;
              res.redirect('/');
            }
            else {
              res.redirect('/login');
            }
          })
      }
    });
}

function register(req, res) {
  res.status(200).sendFile(path.join(__dirname, '../views/register.html'));
}
function tryRegister(req, res) {
  const user = req.body;
  if (!_validateUserInput(user)) { res.redirect('/register'); return; }
  
  const saltRounds = 10;
  bcrypt.hash(user.password, saltRounds)
    .then(function(hash) {
      return users.create({ name: user.username, email: user.email, password: hash, roleId: 1 });
    })
    .then((user) => {
      req.session.user = user;
      res.redirect('/');
    });
}
function _validateUserInput(user) {
  if (!user.username) { return false; }
  if (user.password !== user.password_confirm) { return false; }
  return true;
}

function index(req, res) {
  res.status(200).send(template(req.session.user.roleId));
}
function cad(req, res) {
  if (req.session.user.roleId < 2) { res.redirect('/forbidden'); return; }
  res.sendFile(path.join(__dirname, '../views/cad.html'));
}
function admin(req, res) {
  if (req.session.user.roleId < 3) { res.redirect('/forbidden'); return; }
  res.sendFile(path.join(__dirname, '../views/admin.html'));
}

function forbidden(req, res) {
  res.status(403).sendFile(path.join(__dirname, '../views/forbidden.html'));
}

function apiNotFound(req, res) {
  res.status(404).json({ statusCode: 404, message: 'Can\'t find endpoint' });
}

function notFound(req, res) {
  res.status(404).send('Page not found');
}

module.exports = {
  login,
  tryLogin,
  register,
  tryRegister,
  index,
  cad,
  admin,
  forbidden,
  apiNotFound,
  notFound
};
