const router = require('express').Router();

const controllers = require('../controllers');

router.get('/', controllers.index);
router.get('/api/models', controllers.getModels);
router.get('/api/*', controllers.apiNotFound);
router.get('*', controllers.notFound);

module.exports = router;
