var passport = require('passport');

var datasource = require('../data/users.js');

/**
 * We only store the user id.
 */
passport.serializeUser((deserialized_user, cb) => {
  cb(null, deserialized_user.id);
});

/**
 * We expect the serialized user to be a user id.
 */
passport.deserializeUser((serialized_user, cb) => {
  datasource.get(serialized_user, (user) => {
    cb(null, user);
  });
});

module.exports = [passport.initialize(), passport.session()];
