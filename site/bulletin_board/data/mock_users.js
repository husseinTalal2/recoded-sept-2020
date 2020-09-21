var users = {};

/**
 * Authenticates a user.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   error_message: string,
 *   user: user { id, username }
 * }
 * error_message will always be defined when success is false.
 * user will always be defined when success is true.
 */
users.login = (credentials, callback) => {
  var success = false;
  var error_message = "";

  if (credentials.username != "test") {
    error_message = "We don't recognize your username. Did you want to sign up?";
  } else if (credentials.password != "123") {
    error_message = "Login failed.";
  } else {
    success = true;
  }

  var result = {
    success: success,
    error_message: error_message,
    user: success ? { id: 2, username: "test" } : null
  };
  callback(result);
}

/**
 * Creates a new user.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   error_message: string,
 *   user: user
 * }
 * error_message will always be defined when success is false.
 * user will always be defined when success is true.
 */
users.signup = (credentials, callback) => {
  var success = false;
  var error_message = "";

  if (credentials.username == "test") {
    error_message = "Username taken! Please try another!";
  } else if (credentials.password.length < 3) {
    error_message = "Your password is not long enough (3 character minimum)!";
  } else {
    success = true;
  }

  var result = {
    success: success,
    error_message: error_message,
    user: success ? { id: 2, username: credentials.username } : null
  };
  callback(result);
}

/**
 * Retrieves a user by id.
 *
 * The callback takes a single parameter, the user - which is non-null if the
 * request was successful and a user was found.
 *
 * {
 *   id: integer,
 *   username: string,
 * }
 */
users.get = (id, callback) => {
  if (id != 2) {
    return callback(null);
  }

  var user = {
    id: id,
    username: "test"
  };
  callback(user);
};

module.exports = users;
