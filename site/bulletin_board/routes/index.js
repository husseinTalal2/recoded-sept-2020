var express = require('express');
var router = express.Router();

/* EJS: Shows the landing page which contains sign-in and sign-up forms. */
router.get('/', (req, res, next) => {
  if (req.user) {
    req.logout();
  }
  res.render('index');
});

module.exports = router;
