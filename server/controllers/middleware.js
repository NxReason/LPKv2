function verifyLoggedIn(req, res, next) {
  // TEST ! 
  req.session.user = {
    id: 1,
    name: 'admin',
    email: 'admin@gmail.com',
    roleId: 3
  };
  next();
  // END TEST !

  // if (!req.session.user) { res.redirect('/forbidden'); }
  // else { next(); }
}

module.exports = { verifyLoggedIn };