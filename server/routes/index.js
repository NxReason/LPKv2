const router = require('express').Router();

const controller = require('../controllers');

router.get('/', controller.index);

module.exports = router;
