var express = require("express");
var router = express.Router();

var datasource = require("../data/user.js");

router.get("/", (req, res, next) => {
    // this endpoint returns profile page as html and contains user's info
    datasource.profile(req.user.id, (user) => {
        console.log(user.firstname);
        res.render("profile", { id: "profile", title: "profile", user: user });
    });
});


router.get("/change-password", (req, res, next) => {
    
    datasource.profile(req.user.id, (user) => {
        res.render("change_password", {
            id: "profile",
            title: "change password",
        });
    });
});


router.post("/edit", (req, res, next) => {
    // this endpoint receives the changed info of a user
});
router.post("/password", (req, res, next) => {
    // this endpoint receives the old and the new password of a user
});

module.exports = router;
