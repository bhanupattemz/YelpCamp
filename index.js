
require("dotenv").config()
const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Campgrounds = require("./models/campground");
const { title } = require("process");
const methodOverride = require("method-override");
const ExpressError = require("./utilites/ExpressError");
const WrapAsync = require("./utilites/wrapAsync");
const wrapAsync = require("./utilites/wrapAsync");
const Joi = require("joi");
const Campground = require("./models/campground");
const { campgroundSchema, reviewSchema } = require("./ejsSchema")
const Review = require("./models/review")
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportLocal = require("passport-local");
const User = require("./models/user");
const campgroundrouter = require("./routes/campground")
const reviewRouter = require("./routes/review")
const userRouter = require("./routes/user")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const MongoStore = require('connect-mongo');


const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json())
app.use(methodOverride("_method"))
app.engine("ejs", ejsMate);
app.use(express.static("static"))
app.use(mongoSanitize());
app.use(mongoSanitize({
    replaceWith: '_'
}));

const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/",
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/",
];
const connectSrcUrls = [
    "https://api.maptiler.com/",
];
const fontSrcUrls = [];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/dvitufcfs/",
                "https://images.unsplash.com/",
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);
const dbUrl = process.env.ATLAS_URL

mongoose.connect(dbUrl)
    .then(() => {
        console.log("connected success!!!")
    })
    .catch(
        e => {
            console.log(e)
        })
const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'thisshouldbeabettersecret!'
    }
});
const sessionConfig = {
    store,
    name: 'session',
    secret: "thisIsSecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session())
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.get("/", (req, res) => {

    res.render("home")
})
app.use("/", userRouter)
app.use("/campgrounds", campgroundrouter);
app.use("/campgrounds/:id/review", reviewRouter);



app.all("*", (req, res, next) => {
    next(new ExpressError("Page Not found", 404))
})

app.use((err, req, res, next) => {

    const { statusCode = 500 } = err
    if (!err.message) err.message = "some thing wents Wrong";
    res.status(statusCode).render("error", { err, statusCode })
})

app.listen(8000, () => {
    console.log("server runing on port 8000")
})