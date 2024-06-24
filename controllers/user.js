const User = require("../models/user")
module.exports.renderCreateUser = (req, res) => {
    res.render("./user/register")
}

module.exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ email, username });
        const newUser = await User.register(user, password);
        req.logIn(newUser, err => {
            if (err) return next(err);
            req.flash("success", "Welcome To YelpCamp")
            res.redirect("/campgrounds")
        })

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/register")
    }

}

module.exports.renderLogin = (req, res) => {
    res.render("./user/login")
}

module.exports.logIn = async (req, res) => {
    req.flash("success", `Welcome back ${req.body.username}`);
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    res.redirect(redirectUrl)
}

module.exports.logOut = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}