const express = require("express")
const passport = require("passport")
const session = require("express-session")
const { storeReturnTo } = require("../utilites/middleware")
const User = require("../controllers/user")

const router = express.Router()

router.route("/register")
    .get(User.renderCreateUser)
    .post(User.createUser)

router.route("/login")
    .get(User.renderLogin)
    .post(storeReturnTo, passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), User.logIn)

router.get('/logout', User.logOut);

module.exports = router;