var express = require('express');
var router = express.Router();

var datasource = require('../data/user.js');

router.get('/', (req, res, next) => {
    // this endpoint returns profile page as html and contains user's info

})
router.post('/edit', (req, res, next) => {
    // this endpoint receives the changed info of a user 

})
router.post('/password', (req, res, next) => {
    // this endpoint receives the old and the new password of a user

})