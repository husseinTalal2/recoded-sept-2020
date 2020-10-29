var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./data/database.db');

var bcrypt = require('bcrypt');
var saltRounds = 10;

const user = {};

user.profile = (id, callback) => {
    // gets the info of the user and passes it to the callback 
    const sql = "SELECT * FROM Users WHERE Users.id = ?";

    db.get(sql, [id], (err, row) => {
        if (err || !row) {
            callback(null);
            return;
          }
          console.log(row);
          callback({
            username : row.username,
            firstname : row.firstname,
            lastname : row.lastname,
            bio : row.bio,
            dob : row.dob,
        });
      
    })
}


user.editProfile = (credentials, callback) => {
    // this function receives the new info of a user from the endpoint and a callback
    // validates the received info then changes the info in the database and returns a success or error msg 

}

user.changePassword = (credentials, callback) => {
    // this function receives the old and the new password of the user
    // validates that the old password matches the password in the DB if not returns an error msg
    // if they are matched, then changes the password in the DB with the new one and returns a success msg 
    
}

module.exports = user;