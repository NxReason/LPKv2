const bcrypt = require('bcrypt');

const { users, scenarios, roles } = require('../models');

/**
 * LOGIN
 */
function login(req, res) {
  res.render('login');
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

/**
 * REGISTER
 */
function register(req, res) {
  res.render('register');
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

/**
 * PAGES
 */
function index(req, res) {
  const { user } = req.session;
  res.render('index', { user });
}
function cad(req, res) {
  if (req.session.user.roleId < 2) { res.redirect('/forbidden'); return; }

  const { user } = req.session;
  res.render('cad', { user });
}
function admin(req, res) {
  const { user } = req.session;
  if (user.roleId < 3) { res.redirect('/forbidden'); return; }

  const models = scenarios.all();
  users.findAll({
    include: [{ model: roles }]
  })
    .then(users => {
      res.render('admin', { user, models, users });
    });
}
function userNew(req, res) {
  const { user } = req.session;
  roles.findAll()
    .then(roles => {
      res.render('user-form', {
        user,
        title: 'Добавить пользователя',
        roles,
        editedUser: false
      });
    });
}
function userEdit(req, res) {
  const { userId } = req.params;
  const { user } = req.session;

  const pUser = users.findOne({
    where: { id: userId }
  }, {
    include: [{ models: roles }]
  });
  const pRoles = roles.findAll();
  Promise.all([pUser, pRoles])
    .then(queryResult => {
      console.log(queryResult[0]);
      res.render('user-form', {
        user,
        title: 'Изменить данные пользователя',
        editedUser: queryResult[0],
        roles: queryResult[1]
      });
    });
}

function forbidden(req, res) {
  res.render('forbidden');
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
  userNew,
  userEdit,
  forbidden,
  apiNotFound,
  notFound
};
