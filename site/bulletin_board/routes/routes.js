var express = require('express');
var router = express.Router();
var protected = require('connect-ensure-login').ensureLoggedIn('/');

router.use('/', require('./index'));
router.use('/users', require('./users'));
router.use('/posts', protected, require('./posts'));
router.use('/profile', protected, require('./profile'));

module.exports = router;
