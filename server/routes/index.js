const router = require('express').Router();

const c = require('../controllers');

// auth
router.get('/login', c.core.login);
router.post('/login', c.core.tryLogin);

router.get('/register', c.core.register);
router.post('/register', c.core.tryRegister);

router.get('/forbidden', c.core.forbidden);

router.use(c.middleware.verifyLoggedIn);

// app
router.get('/', c.core.index);
router.get('/cad', c.core.cad);
router.get('/admin', c.core.admin);

// api
router.get('/api/models', c.scenarios.all);
router.get('/api/models/:id', c.scenarios.get);

// 404 - not found
router.get('/api/*', c.core.apiNotFound);
router.get('*', c.core.notFound);

module.exports = router;
