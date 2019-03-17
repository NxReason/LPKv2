function verifyLoggedIn(req, res, next) {
  if (!req.session.user) { res.redirect('/forbidden'); }
  else { next(); }
}

module.exports = { verifyLoggedIn };